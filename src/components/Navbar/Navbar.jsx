import React, { useEffect, useState } from 'react'
import LOGO from "../../assets/images/logo-pizza.png"
import CARTLOGO from "../../assets/images/cart-logo-pizza.png"
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


export default function Navbar() {

  const dispatch = useDispatch();
  const pizzaList = useSelector((state) => state.pizza.pizzas);
  let total = 0;
  pizzaList.map((prices) => {total+= prices.price});
// console.log(total);

console.table(pizzaList);

const allBag = useSelector((state) =>state.pizza.cart)
  console.table(allBag);


const qty_last_pizza = (lastName, arr) => {
  arr.find(({name}) => name == lastName)
};

// let lastPizza = qty_last_pizza(pizzaList[pizzaList.length-1].name, pizzaList);
// console.log(lastPizza);

// const lastPizza = pizzaList.find(({name}) => name == pizzaList[pizzaList.length-1].name);
// console.table(lastPizza)
// const beforeLastPizza = pizzaList.find(({name}) => name == pizzaList[pizzaList.length-2].name);
// console.table(beforeLastPizza);

// const found = array1.find((element) => element > 10);

  const [isBagHovered, setIsBagHovered] = useState(false);
// console.log(document.querySelector('.navbar').querySelector(".bag_pizza"));

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }

  useEffect(() => {
    
    if (isBagHovered) {
      document.querySelector('.navbar').querySelector(".bag_pizza").style.position = `fixed`;
      document.querySelector('.navbar').querySelector(".bag_pizza").style.display = `flex`;

    } else {
      document.querySelector('.navbar').querySelector(".bag_pizza").style.position = `fixed`;
      document.querySelector('.navbar').querySelector(".bag_pizza").style.display = `none`;

    }

  }, [isBagHovered])
  
  return (
    <>
      <div
        className="navbar  w-full h-full flex flex-col justify-center rounded-b-3xl items-center gap-3 px-3 text-white bg-[rgba(46,46,46,1)]"
        // style={{
        //   backgroundColor: themeStyle.backgroundColor,
        //   color: themeStyle.color,
        // }}
      >
        <div
          className={`group w-[98%] h-full  rounded-2xl flex  

        `}
        >
          <div className="left h-full w-1/3  flex flex-row justify-start items-center gap-[5rem] text-[1.5rem] pl-6  max-[600px]:w-1/4">
            <div class="menu-toggle cursor-pointer hidden max-[768px]:block">
              <span className="block w-[25px] h-[3px]  mx-3 my-1"></span>
              <span className="block w-[25px] h-[3px]  mx-3 my-1"></span>
              <span className="block w-[25px] h-[3px]  mx-3 my-1"></span>
            </div>
            <div
              className="flex gap-[5rem] max-[900px]:gap-[3rem] max-[900px]:text-[1.1rem] max-[768px]:hidden"
              // style={{color: themeStyle.color}}
            >
              <Link
                to={`/pizza-redux/`}
                className="hover:underline max-[768px]:ml-0"
              >
                Home
              </Link>

              <a className="hover:underline max-[768px]:ml-0" href="#">
                Products
              </a>
              <a className="hover:underline max-[768px]:ml-0" href="#">
                Contact
              </a>
            </div>
          </div>
          <div className="mid h-full w-[20%] mx-auto justify-center    flex">
            <Link
              to={`/pizza-redux/`}
              className="w-full h-full  mx-auto justify-center    flex"
            >
              <img className="  cursor-pointer " src={LOGO} alt="" />
            </Link>
          </div>
          <div className="right h-full w-1/3 flex justify-end gap-6 items-center pr-5 max-[900px]:gap-2 max-[630px]:w-2/3">
            <div className="h-[55%] w-[140px] hidden rounded-3xl  justify-center items-center gap-4 overflow-hidden max-[1085px]:w-[200px] max-[890px]:w-[200px] max-[890px]:h-[60%] max-[890px]:gap-1 max-[890px]:flex max-[630px]:w-[80px] ">
              <div className="h-[30px] w-[30px] bg-white rounded-full flex justify-center items-center max-[890px]:h-[25px] max-[890px]:w-[25px]  ">
                {/* <img className="" src={money} alt="" /> */}
              </div>
              <h1 className="text-[1.3rem] max-[1085px]:text-[1rem] text-white pt-1">
                {" "}
                € &nbsp;: &nbsp;{" "}
              </h1>
            </div>
            <div className="left h-[55%] rounded-full w-[9rem]  gap-2 justify-start pl-3 items-center hidden bg-[#737373] max-[630px]:w-[60px]">
              <div className="loupe  max-[900px]:pl-2 max-[630px]:pl-0 max-[600px]:w-[2rem]">
                {/* <img className="" src={chercher} alt="" width="20px" height="20px"/> */}
              </div>
              <div className="search text-[white] pt-1 flex max-[900px]:hidden">
                Search...
              </div>
            </div>
            <div className="mid">
              <Link

              to={`/pizza-redux/cart/`}
              >
              <img
                src={CARTLOGO}
                className="flex rounded-full cursor-pointer"
                width="50px"
                height="50px"
                alt=""
                onMouseEnter={() => setIsBagHovered(true)}
                onMouseLeave={() => setIsBagHovered(false)}
                onClick={``}
                
              />
              </Link>
            </div>

            <div
              className="right cursor-pointer bg-slate-500 w-[20%] h-[50%] rounded-3xl"

              // onClick={ ()=> setFilterDisplay(!filterDisplay)}
            >
              <div className="title_area text-center h-full w-[80%] m-auto flex justify-around items-center">
                <h3>NL/FR</h3>

                {/* <img src={DOWNARROW} alt="" srcset="" className='w-[15%]' /> */}
              </div>

              <div
                // onMouseEnter={() => {setIsBagHovered(true), alert('your in')}}
                // onMouseLeave={() => {setIsBagHovered(false), alert('hello your out')}}
                className="cercle_item w-[1.8rem] h-[1.8rem]  outline outline-white absolute outline-[1px]  rounded-full top-[1.4rem] right-[11.2rem] flex "
              >
                <span className="m-auto text-[0.8rem]">{pizzaList.length}</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`bag_pizza flex flex-col justify-around
               right-[3rem] top-[8rem] rounded-2xl 
                              w-[20rem] h-[20rem] bg-[rgba(0,0,0,0.4)]
              `}
        >

          <div className="title w-[55%] h-[10%]  flex">
            <h5 className="mx-auto  self-end">PIZZAS &ensp; </h5>
            <img src="" alt="" srcset="" />
          </div>

          <div className="list_bag w-[88%] h-[80%]  justify-around flex flex-col">

            {

              pizzaList.slice(-2).map((element ) => {
                const srcPizz = new URL(`${element.image}`, import.meta.url).href;
                
                return (

                  <div className="SideBarItem w-full h-[5rem] bg-white flex rounded-2xl">
                  <div className="left w-[25%]  h-full rounded-l-lg flex ">
                    {/* image content */}
    
                    <img
                      src={srcPizz}
                      alt=""
                      srcset=""
                      className="m-auto"
                    />
                  </div>
    
                  <div className="middle w-[50%]  h-full flex flex-col justify-center items-center">
                    {/* text content */}
    
                    <p className="text-[0.8rem] text-black">
                      {element.name}
                    </p>
                    <p className="text-[0.8rem] text-black">
                      {element.price}€ {``}
                    </p>
                  </div>
    
                  <div className="right w-[25%]  h-full rounded-r-lg flex flex-col justify-center items-center ">
                    {/* quantity content */}
    

    
                    <button
                      type="button "
                      className=""
                    >
                      X
                    </button>
                  </div>
                </div>

                )
              })
            }

            <div className="price_area mx-auto">

              <span  >Prix Total : {total.toFixed(2)} € </span>
            </div>

 
          </div>
        </div>
      </div>
    </>
  );
}
