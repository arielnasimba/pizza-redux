import React from 'react'
import TEST from "../../assets/images/pizza-Vesuvius.png"
import { useEffect,useState } from 'react'
import "../Card/Card.css"

export default function Card() {

    const [isCardHovered, setIsCardHovered] = useState(false);
    
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

            <div className={`image_area absolute w-[30rem] h-[40rem]  left-[8.75rem] 

                    
                                
            `}
            
            style={{ top: isCardHovered ? "-20rem" : "-4.5rem" }}
            >
                <img src={TEST} alt="" srcset="" className='w-full h-full' />
            </div>

            {/* image area end */}

                {/* ingredients area start  */}

            <div className={`ingredients_area italic text-white font-medium justify-center
                            w-[85%] h-[60%]  m-auto flex-col flex
            `}
            >

            <h4 className='mt-6'>Ingrédients : </h4>
            <p className='ml-6 text-[rgb(66,194,224)] not-italic'>test</p>
            <p className='ml-6 text-[rgb(66,194,224)] not-italic'>test</p>
            <p className='ml-6 text-[rgb(66,194,224)] not-italic'>test</p>
            <p className='ml-6 text-[rgb(66,194,224)] not-italic'>test</p>
            <p className='ml-6 text-[rgb(66,194,224)] not-italic'>test</p>
            <p className='ml-6 text-[rgb(66,194,224)] not-italic'>test</p>
            <p className='ml-6 text-[rgb(66,194,224)] not-italic'>test</p>
            <p className='ml-6 text-[rgb(66,194,224)] not-italic'>test</p>
            </div>
                {/* ingredients area end  */}

                {/* name and price area end  */}

            <div className={`name_price_area flex
                            w-[85%] h-[10%]   m-auto justify-between
            `}
            >

                <div className={`name_pizza w-[60%] h-[80%]    flex items-center  my-auto
                
                `}>

                <h3 className='text-[rgb(246,85,101)] text-[1.3rem] italic'
                > Versivius</h3>

                </div>
                <div className={`price_pizza w-[16%] h-[80%]  my-auto text-end flex
                
                `}>
                    <span className='self-end text-[rgb(118,206,132)] font-medium text-[1.3rem] '> 3 €</span>

                </div>

            </div>

                {/* name and price area end  */}
                {/* button  area start  */}

            <button type='button' className={`name_price_area flex rounded-3xl btn   
                            w-[65%] h-[10%]  bg-[#eaeaea] m-auto 
            `}
            >
                    ADD TO BAG
            </button>

                {/* button  area end  */}
        </div>

    </>
  )
}
