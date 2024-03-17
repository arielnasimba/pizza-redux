import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import ARROW from "../../assets/images/arrow-left.png";
import BAGPAGE from "../../assets/images/pizza-bagPage.jpg";
import BGCARD from "../../assets/images/vegetables.jpg";
import SMPIZZA from "../../assets/images/pizza_cursor.png";
import DELETE from "../../assets/images/delete-item.png";
import "../BagPage/BagPage.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addPizza,
  addToCart,
  deletePizza,
  removeFromCart,
  updateCartQty,
} from "../reducers/pizzaListSlice";
import Footer from "../Footer/Footer";

export default function BagPage() {
  const dispatch = useDispatch();
  const pizzaList = useSelector((state) => state.pizza.pizzas);

  const [pizzaListCopy, setPizzaListCopy] = useState([...pizzaList]);

  const pizzaCart = useSelector((state) => state.pizza.cart);
  const [pizzaCartCopy, setPizzaCartCopy] = useState([...pizzaCart]);

  console.table(pizzaListCopy);

  console.table(pizzaCartCopy);

  let total = 0;
  pizzaList.map((prices) => {
    total += prices.price;
  });

  useEffect(() => {
    setPizzaListCopy([...pizzaList]);
  }, [pizzaList]);
  
  useEffect(() => {
    setPizzaCartCopy([...pizzaCart]);
  }, [pizzaCart]); // Mettre à jour pizzaCartCopy lorsque pizzaCart change
  const handleDeletePizza2 = (elementID, name_pizza) => {
    const lastIndex = pizzaList.map(pizza => pizza.name).lastIndexOf(name_pizza);

    dispatch(deletePizza(lastIndex));
    dispatch(removeFromCart(elementID));  

  }

  return (
    <>
      <body
        className={`body_detail w-[100dvw] h-[100dvh]  flex flex-col  bgfuchsia-600 `}
        
      >
        <nav className=" w-full h-[12.5dvh] fixed ">
          <Navbar />
        </nav>

        <main
          className={`w-[88%]  mt-[7rem] 

min-[1440px]: h-[90dvh] min-[1440px]: 
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

                <p id="backBtn" className=" h-[70%] pt-[0.6rem]">
                  Back
                </p>
              </button>
            </Link>
          </div>

          {/* flag_area start  */}
          <div
            className={`flags_cards_area    

min-[1440px]:w-full min-[1440px]: min-[1440px]: h-[55dvh]
min-[1440px]:  min-[1440px]:flex min-[1440px]:justify-between
min-[1440px]:  min-[1440px]: min-[1440px]:
`}
          >
            {/* <h3>{flag.name.common}</h3> */}

            <div
              className={`left  flex     rounded-lg

min-[1440px]:w-[50%] min-[1440px]:h-full 



`}
            >
              <img src={BAGPAGE} alt="" srcset="" className={`rounded-3xl  `} />
            </div>
            <div
              className={`right justify-center

min-[1440px]:w-[42%] min-[1440px]:  h-[55dvh] 
min-[1440px]: flex min-[1440px]:  
min-[1440px]:items-center






`}
            >
              <div
                className={`text_inside  

    min-[1440px]: w-[80%] min-[1440px]: flex
    min-[1440px]: h-full min-[1440px]: flex-col
    min-[1440px]: justify-between items-center
`}
              >
                <div
                  className={`title_area text-center flex items-center gap-7 

  min-[1440px]: min-[1440px]: h-[10%] w-full
`}
                >
                  <span>
                    <img src={SMPIZZA} alt="" srcset="" className="flex " />
                  </span>
                  <h3
                    className={`

min-[1440px]: text-[1.8rem]
min-[1440px]: font-[800]

`}
                  >
                    {/* {pizzaId.name} */}
                    MERCI POUR VOTRE COMMANDE
                  </h3>
                  <span>
                    <img src={SMPIZZA} alt="" srcset="" className="flex " />
                  </span>
                </div>
                <div
                  className={`desc_area  flex flex-col   

  min-[1440px]: w-[65%] h-[80%] justify-evenly

                    `}
                >
                  <div className="top w-[30%] h-[6%]  ">
                    <h4
                      className=" 
                  "
                    >
                      PANIER :
                    </h4>
                  </div>
                  <div
                    className={` list_pizza_cart w-full h-[80%]  grid grid-flow-row gap-4 `}
                  >
                    {
                    
                    // const bag_without_occurencies = pizzaCart.filter(pizza => pizza.qty > 0);


                    pizzaCartCopy.map((element, key) => {
                      const srcPizz = new URL(
                        `${element.image}`,
                        import.meta.url
                      ).href;

                      if (element.qty > 0) {
                        return(

                          <div className="SideBarItem w-full h-[5rem] bg-white flex rounded-2xl mx-auto"
                              id={element.id} key={key}
                            >
                              <div
                                className="left w-[35%]  h-full rounded-2xl flex bg-no-repeat "
                                style={{
                                  backgroundImage: `url(${BGCARD})`,
                                  backgroundSize: `100% 100%`,
                                }}
                              >
                                {/* image content */}   
    
                                <img
                                  src={srcPizz}
                                  alt=""
                                  srcset=""
                                  className="m-auto w-[80%]"
                                />
                              </div>
    
                              <div className="middle w-[50%]  h-full flex flex-col justify-center items-center">
                                {/* text content */}
    
                                <p className="text-[0.8rem] text-black">
                                  {element.name}
                                </p>
                                <p className="text-[0.8rem] text-black">
                                  {element.price}€
                                  <span className="not-italic"> x</span>
                                  {`  ${element.qty}`}
                                </p>
                              </div>
    
                              <div className="right w-[25%]  h-full  rounded-r-lg flex flex-col justify-center items-center ">
                                {/* quantity content */}
    
                                <button
                                  type="button "
                                  className=" w-[45%] h-[40%]  rounded-2xl flex active:scale-50 duration-100"
    
                                  // onClick={() => {dispatch(deletePizza(element.id))}}
                                  // onClick={() => dispatch(deletePizza(element.id))}
                                  onClick={(e) => { handleDeletePizza2(element.id, element.name)}}
                                >
                                  <img
                                    src={DELETE}
                                    alt=""
                                    srcset=""
                                    className="w-[50%] m-auto"
                                  />
                                </button>
                              </div>
                            </div>
                         )
                      }
                    

               
                    })}
                  </div>
                </div>
                <div className="price_area w-[40%] h-[10%]   ">
                  <h3 className="text-[1.2rem] mx-auto">
                    {" "}
                    PRIX TOTAL:
                    {total.toFixed(2)}€
                  </h3>
                </div>
                <div
                  className={`near_countries_area    justify-center

  min-[1440px]: w-full min-[1440px]: h-[10%]  min-[1440px]: flex
`}
                >
                  <button
                    type="button"
                    // onClick={() =)}
                    className="btn h-full w-[35%] rounded-3xl  self-end bg-[#737373] text-white hover:text-black"
                  >
                    CONFIRMER PANIER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* flag_area end  */}
        <Footer />
      </body>
    </>
  );
}
