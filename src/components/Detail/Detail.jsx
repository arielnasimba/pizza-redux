import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ARROW from "../../assets/images/arrow-left.png"
import { useDispatch, useSelector } from "react-redux";
import BGPIZZA from "../../assets/images/bg-pizza.jpg"
import '../Detail/Detail.css'

import {addPizza} from '../reducers/pizzaListSlice'

export default function Detail() {
  const { id = 0 } = useParams();
      // console.log(id);

    //   console.log(pizza);
      const pizzaId = useSelector((state) =>state.resto.restaurantPizzas.find(pizz => pizz.name == id) )
    // console.log(pizzaId);
    const srcPizzaID = new URL(`${pizzaId.image}`, import.meta.url).href;
    // console.log(srcPizzaID);
    const dispatch = useDispatch();


  return (
    <>
      <body className={`w-[100dvw] min-h-[100dvh]  flex flex-col `}>
        <nav className=" w-full h-[12.5dvh] fixed">
          <Navbar />
        </nav>

        <main
          className={`w-[88%]  mt-[7rem]

min-[1440px]:h-[80dvh] min-[1440px]:bg-[rgba(250,250,250,0)]
min-[1440px]: min-[1440px]:self-center



`}
        >
          <div
            className={`back_btn_area 


                min-[1440px]:w-[10.5rem] min-[1440px]:h-[3.6rem] 
                min-[1440px]: min-[1440px]:my-[3.5rem]

`}
          >
  
            <Link to={`/pizza-redux/`}>
              <button
                type="button"
                className={`back_button btn 


    w-full h-full

    min-[1440px]:text-[1.3rem] 
    min-[1440px]:flex min-[1440px]:justify-center
    min-[1440px]:items-center min-[1440px]: 
    
`}
              >
                <span
                  className={`

min-[1440px]: min-[1440px]:w-[20%]
min-[1440px]:h-[50%]

`}
                >
                  <img
                    src={ARROW}
                    alt=""
                    srcset=""
                    className={`

        min-[1440px]:w-[95%]
        min-[1440px]:
`}
                  />
                </span>

                <p id="backBtn" className=" h-[70%] pt-[0.6rem]">Back</p>
              </button>
            </Link>
          </div>

          {/* flag_area start  */}
          <div
            className={`flags_cards_area    

      min-[1440px]:w-full min-[1440px]: min-[1440px]:h-[60%]
      min-[1440px]:  min-[1440px]:flex min-[1440px]:justify-between
      min-[1440px]:  min-[1440px]: min-[1440px]:
`}
          >
            {/* <h3>{flag.name.common}</h3> */}

            <div
              className={`left  flex   justify-center bg-cover bg-no-repeat rounded-lg

    min-[1440px]:w-[50%] min-[1440px]:h-full 



`} 
style={{backgroundImage:`url(${BGPIZZA})`}}
            >
              <img
                src={srcPizzaID}
                alt=""
                srcset=""
                className={`rounded-3xl  self-center`}
              />
            </div>
            <div
              className={`right 

    min-[1440px]:w-[42%] min-[1440px]:h-full
    min-[1440px]:flex min-[1440px]:justify-center 
    min-[1440px]:items-center


    



`}
            >
              <div
                className={`text_inside  

            min-[1440px]:w-full min-[1440px]:flex
            min-[1440px]:h-[98%] min-[1440px]:flex-col
            min-[1440px]:justify-between 
`}
              >
                <div
                  className={`title_area text-center

          min-[1440px]: min-[1440px]:h-[16%]
`}
                >
                  <h3
                    className={`

        min-[1440px]:text-[1.8rem]
        min-[1440px]:font-[800]

`}
                  >
                    {pizzaId.name}
                  </h3>
                </div>
                <div
                  className={`desc_area  flex flex-col m-auto 

          min-[1440px]:w-[50%] min-[1440px]:h-[70%]
         

                            `}
                >
                <h4>Ingrédients:</h4>

                {
                    pizzaId.topping.map((el) => {
                        return (

                            <p className="pl-[7.5rem] not-italic "> {el} </p>
                        )
                    })
                }
                 
                 </div>
                <div
                  className={`near_countries_area   

          min-[1440px]:w-full min-[1440px]:h-[16%]  min-[1440px]:flex
`}
                >
  

                    <button type="button"
                    onClick={() => dispatch(addPizza(pizzaId))}
                    className="btn h-[80%] w-[35%] rounded-3xl m-auto bg-[#737373] text-white hover:text-black"
                    >
                        ADD TO BAG
                    </button>
                </div>
              </div>
            </div>
          </div>

          {/* flag_area end  */}
        </main>
      </body>
    </>
  );
}
