import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import ARROW from "../../assets/images/arrow-left.png"
import "../BagPage/BagPage.css"

export default function BagPage() {
  return (
    <>
      <body
        className={`body_detail w-[100dvw] min-h-[100dvh]  flex flex-col overflow-y-hidden `}
        style={{ overflowY: `hidden` }}
      >
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

                <p id="backBtn" className=" h-[70%] pt-[0.6rem]">
                  Back
                </p>
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
            >
              <img
                src={``}
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
                    {/* {pizzaId.name} */}
                  </h3>
                </div>
                <div
                  className={`desc_area  flex flex-col m-auto 

  min-[1440px]:w-[50%] min-[1440px]:h-[70%]
 

                    `}
                >
                  <h4>COMMANDE :</h4>
{/* 
                  {pizzaId.topping.map((el) => {
                    return <p className="pl-[7.5rem] not-italic "> {el} </p>;
                  })} */}
                </div>
                <div
                  className={`near_countries_area   

  min-[1440px]:w-full min-[1440px]:h-[16%]  min-[1440px]:flex
`}
                >
                  <button
                    type="button"
                    onClick={() => dispatch(addPizza(pizzaId))}
                    className="btn h-[80%] w-[35%] rounded-3xl m-auto bg-[#737373] text-white hover:text-black"
                  >
                    CONFIRMER PANIER
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* flag_area end  */}
        </main>
        <footer className="footer items-center p-4 bg-[rgba(46,46,46,1)] text-neutral-content rounded-t-3xl w-full h-[7.5dvh] flex justify-around">
          <aside className="items-center grid-flow-col ">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>Copyright © 2024 - All right reserved by Ariel </p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </nav>
        </footer>
      </body>
    </>
  );
}
