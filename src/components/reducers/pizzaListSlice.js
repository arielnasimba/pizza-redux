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
            const indexToDelete = action.payload;
            state.pizzas.splice(indexToDelete, 1);  
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
            const pizzaToRemoveIndex = state.cart.findIndex(pizza => pizza.id === pizzaId);
            if (pizzaToRemoveIndex !== -1 && state.cart[pizzaToRemoveIndex].qty > 0) {
              state.cart[pizzaToRemoveIndex].qty -= 1;
            }
          },
    }
});

export const { addPizza, deletePizza, addToCart, removeFromCart, updateCartQty } = pizzaListSlice.actions;

export default pizzaListSlice.reducer