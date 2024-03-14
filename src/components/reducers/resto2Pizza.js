import { createSlice } from "@reduxjs/toolkit";

export const restoSlice2 = createSlice({

    name: 'restaurant2',

    initialState: {
        restaurantPizzas2: null,
    },

    reducers: {
        addPizzas2: (state, action) => {
            state.restaurantPizzas2 = action.payload;
          }
    }
});

export const { addPizzas2 } = restoSlice2.actions;

export default restoSlice2.reducer