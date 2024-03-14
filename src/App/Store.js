import {configureStore} from "@reduxjs/toolkit"
import pizzaListSlice from "../components/reducers/pizzaListSlice"
import restoPizzaReducer from "../components/reducers/restaurantPizza"
import resto2PizzaReducer from '../components/reducers/resto2Pizza'
// import taskSlice from '../reducers/TaskSlice'

export const store = configureStore({
    reducer: {    
        pizza : pizzaListSlice,
        resto: restoPizzaReducer,
        resto2: resto2PizzaReducer
    }
})

