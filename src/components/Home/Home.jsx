import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import "../Home/Home.css"
import Navbar from '../Navbar/Navbar';
import '../Home/Home.css'
import { useSelector, useDispatch} from 'react-redux'
import {pizzaListSlice, addPizza} from "../reducers/pizzaListSlice"
import DATA from "../../assets/data/db_pizza.json"
import {addPizzas} from "../reducers/restaurantPizza"
import {addPizzas2} from "../reducers/resto2Pizza"
import ARROWDOWN from "../../assets/images/arrow-down.ico"


export default function Home() {

    const dispatch = useDispatch();

    //** add data to store start **// 
    dispatch(addPizzas(DATA))
    //** add data to store end **// 

    //** add copy of data to store start **// 
    dispatch(addPizzas2(DATA))
    //** add copy of data to store end **// 

    const pizzaList = useSelector((state) => state.pizza);
    console.log(pizzaList);

    const restoPizzas = useSelector((state) =>state.resto.restaurantPizzas );
    const resto2Pizzas = useSelector((state) =>state.resto2.restaurantPizzas2)

      const [displayFilter, setDisplayFilter] = useState(false);

      useEffect(() => {
          if (displayFilter) 
            { document.querySelector(".filter_list").style.display = `flex`;} 
          else
            { document.querySelector(".filter_list").style.display = `none`;}
      }, [displayFilter])
      
      const [selectedOrder, setSelectOrder] = useState('all');

      const min = Math.min(...resto2Pizzas.map(item => item.price )) ;
      const max = Math.max(...resto2Pizzas.map(item => item.price )) ;
      // console.log(min);
      // console.log(max);

      const [filteredPizzas, setfilteredPizzas] = useState([...restoPizzas])
      useEffect(() => {

        if (selectedOrder.trim() == 'tout') {
          setfilteredPizzas([...restoPizzas]);  
        } else if (selectedOrder.trim() == 'croissant') {
          setfilteredPizzas(filteredPizzas.sort((a,b) => b.price - a.price));
        } else if (selectedOrder.trim() == 'decroissant') {
          setfilteredPizzas(filteredPizzas.sort((a,b) => a.price - b.price));
        } else {
          setfilteredPizzas([...restoPizzas]);  
        }

        // switch (selectedOrder.trim()) {
        //   case 'croissant':
        //     setfilteredPizzas(filteredPizzas.sort((a,b) => b.price - a.price));
        //     break;
        //   case 'decroissant':
        //     setfilteredPizzas(filteredPizzas.sort((a,b) => a.price - b.price));
        //     break;
        //   default:
        //     setfilteredPizzas([...restoPizzas]);  
        //     break;         
        // }
      },[selectedOrder,  filteredPizzas]);
  return (
    <>
      <body className="w-[100dvw] min-h-[100dvh]  flex flex-col bg-slate-400 ">
        <nav className=' w-full h-[12.5dvh] fixed'>

        <Navbar/>

        </nav>
        <main className='w-[80%] min-h-[70dvh]  mx-auto flex flex-col justify-between my-11 mt-[12rem]'>

            <div className="top h-[11.7dvh] w-full flex  justify-between items-center  my-11 ">
                <h2 className='text-[4.5rem] m-0 p-0 text-white'> MENU </h2> 

                <div
                  onClick={() => setDisplayFilter(!displayFilter)}
                  className="filter_area bg-[rgba(46,46,46,1)] w-[15%] h-[55%] mr-[4.3rem] rounded-2xl flex-col flex cursor-pointer">

                  <p className='m-auto not-italic font-semibold text-white flex  justify-center items-center gap-4 '>

                  {`FILTER BY`}  
                  
                    <span>
                      <img src={ARROWDOWN} alt="" srcset="" className='w-[0.9rem] ' />
                    </span>
                  </p>

                </div>

                <div className="filter_list
                bg-red-50 w-[14.5rem] h-[10rem] absolute right-[15.2rem] top-[21rem] rounded-2xl flex">

                    <ul className='w-[80%] h-[80%] m-auto flex flex-col justify-around '>
                      <li
                        onClick={(e) => setSelectOrder('tout')} 
                      className='cursor-pointer hover:underline underline-offset-4 '>Tout</li>
                      <li
                        onClick={(e) => setSelectOrder('croissant')} 
                      className='cursor-pointer hover:underline underline-offset-4 '>Croissant</li>
                      <li
                        onClick={(e) => setSelectOrder('decroissant')} 
                      className='cursor-pointer hover:underline underline-offset-4 '>Décroissant</li>
                      <li
                        onClick={(e) => setSelectOrder('ingredient')} 
                      className='cursor-pointer hover:underline underline-offset-4 '>ingredients</li>
                      {/* <li>Croissant</li> */}
                    </ul>

                </div>
            </div>

            <div className="list_pizza_area w-full min-h-[57dvh] grid grid-cols-3 gap-16 ">
                { filteredPizzas.map( ( element) => { return( <Card id={element.id} /> )})}
            </div>

        </main>
      </body>
    </>
  );
}
