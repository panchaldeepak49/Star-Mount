import React from 'react'
import Img1 from '/Images/pim1.jpg'
import divyansiImg from '/Images/customers/divyanshi.jpeg'
import navyaImg from '/Images/customers/navya.jpeg'
import mintImg from '/Images/customers/mint.jpeg'
import agroImg from '/Images/customers/agro.jpeg'
import ankitImg from '/Images/customers/ankit.jpeg'

const OurTrainers = () => {
  return (
    <>
    <div className='mt-10 flex justify-center'>
        <p className='sm:text-[4rem] text-[2rem] text-[#525FE1] font-semibold'>Our Customers</p>
    </div>

    <div className=' flex justify-center gap-10 mt-14 w-[100%] relative animate-moveImages '>

    <div className='flex flex-col items-center justify-center h-20 w-44 sm:h-28 sm:w-28 md:h-52 md:w-52 
    hover:-translate-y-2 hover:scale-110 bg-white rounded-full transition-transform delay-50' >
    {/* <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.4rem] font-semibold'>Pramod Sharma</p>
    <p className='sm:text-xs text-[0.6rem]'>UI Designer</p>  */}
    <img src={divyansiImg} alt="missing" className='rounded-full'/>
    </div>
    
    <div className='flex flex-col items-center justify-center h-20 w-44 sm:h-28 sm:w-28 md:h-52 md:w-52
    hover:-translate-y-2 hover:scale-110 bg-white rounded-full transition-transform delay-50'>
    {/* <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.4rem] font-semibold'>Pramod Sharma</p>
    <p className='sm:text-xs text-[0.6rem]'>UI Designer</p>  */}
    <img src={mintImg} alt="missing" className='rounded-full'/>
    </div>

    <div className='flex flex-col items-center justify-center h-20 w-44 sm:h-28 sm:w-28 md:h-52 md:w-52
    hover:-translate-y-2 hover:scale-110 bg-white rounded-full transition-transform delay-50'>
    {/* <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.4rem] font-semibold'>Pramod Sharma</p>
    <p className='sm:text-xs text-[0.6rem]'>UI Designer</p>  */}
    <img src={agroImg} alt="missing" className='rounded-full'/>
    </div>

    <div className='flex flex-col items-center justify-center h-20 w-44 sm:h-28 sm:w-28 md:h-52 md:w-52
    hover:-translate-y-2 hover:scale-110  bg-white rounded-full transition-transform delay-50'>
    {/* <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.4rem] font-semibold'>Pramod Sharma</p>
    <p className='sm:text-xs text-[0.6rem]'>UI Designer</p>  */}
    <img src={navyaImg} alt="missing" className=''/>
    </div>

    <div className='flex flex-col items-center justify-center h-20 w-44 sm:h-28 sm:w-28 md:h-52 md:w-52
    hover:-translate-y-2 hover:scale-110  bg-white rounded-full transition-transform delay-50'>
    {/* <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.4rem] font-semibold'>Pramod Sharma</p>
    <p className='sm:text-xs text-[0.6rem]'>UI Designer</p>  */}
    <img src={ankitImg} alt="missing" className='rounded-full'/>
    </div>

    </div>
    </>
  )
}

export default OurTrainers