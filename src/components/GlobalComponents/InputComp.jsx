import React from 'react'

const InputComp = ({ type, placeholder, onChange , className }) => {
  return (
    <>
    <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className= {` CustomShadowLight placeholder:text-[#515151] text-xs sm:text-[1rem] w-full border-[1px] border-[#bfcbd3] h-[30px]  sm:h-[48px] outline-none pl-4 rounded-[22px]  ${className} `}
      />
    </>
  )
}

export default InputComp