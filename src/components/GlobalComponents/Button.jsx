import React from 'react'
import { HiMiniArrowLongRight } from "react-icons/hi2";

const Button = ({text}) => {
  return (
    <>
      <button className = 'flex items-center font-semibold px-2   h-[40px] rounded-[100px] text-white bg-gradient-to-r from-[#056BA7] to-[#30B0FA] overflow-hidden animate-bounce
      hover:-translate-y-2 hover:scale-110 transition-transform delay-50 ' > {text}
        <span className="h-[35px] w-[35px] ml-4 text-black rounded-full bg-white text-center items-center 
        flex justify-center hover:duration-1000 bg-gradient-to-r from-transparent via-transparent to-transparent hover:from-[#056BA7] hover:via-[#b0dffc] hover:to-[#30B0FA]    ">
            <HiMiniArrowLongRight />
          </span>
        </button>
    </>
  )
}

export default Button