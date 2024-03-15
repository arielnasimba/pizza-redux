import React from 'react'
import TEST from "../../assets/images/pizza-Vesuvius.png"
import { useEffect,useState } from 'react'
import "../Card/Card.css"
import { useDispatch, useSelector } from 'react-redux';
import CURSORPIZZA from "../../assets/images/pizza_cursor.png"
import BGCARD from "../../assets/images/vegetables.jpg"
import IMGPIZZA from "../../assets/images/pizza-self.png"
import { Link } from 'react-router-dom';
import {addPizza} from '../reducers/pizzaListSlice'


export default function CardSelf() {

    const dispatch = useDispatch();
    const pi = useSelector((state) => state.resto.restaurantPizzas)
    // console.log(pi);
    // pi.map((el) => {

    //     console.log(el.id);
    // })
    // console.log(id);
    // const pizza = useSelector((state) =>
    // state.resto.restaurantPizzas.find(pizza => pizza.id == id)  
    // );
    // console.log(pizza.name);
    const [isCardHovered, setIsCardHovered] = useState(false);
    // console.log(pizza.image);

    // const srcPizza = new URL(`${pizza.image}`, import.meta.url).href;
    // // console.log(srcPizza);




    
  return (

    <>
        <div className={`card_template flex flex-col rounded-3xl
                        h-[30rem] w-[25rem] 

        `}
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={() => setIsCardHovered(false)}

        style={{backgroundColor:`rgba(34, 34, 34, 0.9)` }}
        >

            {/* image area start */}


            {/* image area end */}

                {/* ingredients area start  */}

            

            <Link 
                                    // to={`/flags-api-project/detail/${originalIndex}`}

                to={`/pizza-redux/detail/self-made-pizza`}
                className={`ingredients_area italic text-white font-medium justify-center 
                            w-[85%] h-[40%]  m-auto  bg-white rounded-3xl flex  bg-cover
                            
                `}
                style={{backgroundImage: `url(${BGCARD})`}}

            >

                <img 
                src={IMGPIZZA} 
                alt="" 
                srcset="" className={` `}/>

            </Link>
                {/* ingredients area end  */}



                {/* name and price area end  */}


            <div className={`description_area flex text-[rgb(66,194,224)]
                            w-[85%] h-[16%]   mx-auto justify-between 
            `}
           
    
            >
                    <p>

                    Devenez le chef cuisto et composez votre pizza: sauce tomate, mozzarella +3 garnitures au choix.
                    </p>

            </div>
            <div className={`name_price_area flex
                            w-[85%] h-[10%]   m-auto justify-between
            `}
           
    
            >

                <div className={`name_pizza w-[69%] h-[65%]    flex items-center  my-auto
                
                `}>

                <h3 className='text-[rgb(246,85,101)] text-[1.3rem] italic'
                >
                     {/* {pizza.name} */}
                     Pizza Self-Made
                </h3>

                </div>
                <div className={`price_pizza w-[24%] h-[80%]  my-auto text-end flex 
                
                `}>
                    <span className='self-end text-[rgb(118,206,132)] m-auto font-medium text-[1.1rem] '> 
                     00.00€
                    </span>

                </div>

            </div>

                {/* name and price area end  */}
                {/* button  area start  */}
            <Link 
             to={`/pizza-redux/detail/self-made-pizza`}
            className={`name_price_area flex rounded-3xl btn   
                            w-[65%] h-[10%]  bg-[#eaeaea] m-auto 
            `}
            >
        
                    CREATE YOUR OWN PIZZA
            </Link>

                {/* button  area end  */}
        </div>

    </>
  )
}
