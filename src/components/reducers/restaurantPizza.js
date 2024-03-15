import { createSlice } from "@reduxjs/toolkit";
export const restoSlice = createSlice({
    name: 'restaurant',
    initialState: {
        restaurantPizzas: null,
    },
    reducers: {
        addPizzas: (state, action) => {state.restaurantPizzas = action.payload}
    }
});
export const { addPizzas } = restoSlice.actions;
export default restoSlice.reducer