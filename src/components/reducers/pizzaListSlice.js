import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";




export const pizzaListSlice = createSlice({



    name: 'pizza',

    initialState: {
        pizzas: [],
        cart: [],
    },

    reducers: {
        addPizza: (state, action) => {
            state.pizzas.push(action.payload);
          },
          deletePizza: (state, action) => {

            state.pizzas = state.pizzas.filter(task => task.id != action.payload);
          },
          addToCart: (state, action) => {
              const { pizzaId, qty } = action.payload;
              const existingPizzaIndex = state.cart.findIndex(pizza => pizza.id == pizzaId);
              if (existingPizzaIndex !== -1) {
                  state.cart[existingPizzaIndex].qty += qty;
              } else {
                  const pizzaToAdd = { ...state.pizzas.find(pizza => pizza.id == pizzaId), qty };
                  state.cart.push(pizzaToAdd);
              }
          },
          removeFromCart: (state, action) => {
              const pizzaId = action.payload;
              state.cart = state.cart.filter(pizza => pizza.id != pizzaId);
          },
          updateCartQty: (state, action) => {
            const { pizzaId, newQty } = action.payload;
            const pizzaToUpdateIndex = state.cart.findIndex(pizza => pizza.id === pizzaId);
            if (pizzaToUpdateIndex !== -1) {
              if (newQty > 0) {
                state.cart[pizzaToUpdateIndex].qty = newQty;
              } else {
                state.cart.splice(pizzaToUpdateIndex, 1);
              }
            }
          }
    }
});

export const { addPizza, deletePizza, addToCart, removeFromCart, updateCartQty } = pizzaListSlice.actions;

export default pizzaListSlice.reducer