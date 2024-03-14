import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addPizzas} from './reducers/restaurantPizza'
import DATA from "../../src/assets/data/db_pizza.json"
// function Resto() {
//     const dispatch = useDispatch();

//     useEffect(() => {
//       dispatch(addPizza(DATA)); // Ajoutez les données au store via l'action addPizza
//     }, [dispatch]);
  
  
// }
// export default Resto;


export default function Resto() {

    const dispatch = useDispatch();
    console.log(DATA);

  return (
    <>    
    </>
  )
}


