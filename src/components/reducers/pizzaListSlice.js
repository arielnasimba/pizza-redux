import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";




export const pizzaListSlice = createSlice({



    name: 'pizza',

    initialState: {
        pizzas: [],
    },

    reducers: {
        addPizza: (state, action) => {
            state.pizzas.push(action.payload);
          },
          deletePizza: (state, action) => {
            state.pizzas = state.pizzas.filter(task => task.id != action.payload);
          } 
    }
});

export const { addPizza, deletePizza } = pizzaListSlice.actions;

export default pizzaListSlice.reducer