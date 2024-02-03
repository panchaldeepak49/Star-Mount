import React from 'react'
import Img1 from '/Images/pim1.jpg'
import divyansiImg from '/Images/customers/divyanshi.jpeg'
import navyaImg from '/Images/customers/navya.jpeg'
import mintImg from '/Images/customers/mint.jpeg'
import agroImg from '/Images/customers/agro.jpeg'
import ankitImg from '/Images/customers/ankit.jpeg'
import aceImg from '/Images/customers/ace.jpeg'

const OurTrainers = () => {
  return (
    <>
    <div className='mt-10 flex justify-center'>
        <p className='sm:text-[4rem] text-[2rem] text-[#525FE1] font-semibold'>Our Customers</p>
    </div>

    <div className='flex justify-center overflow-x-hidden'>
    <div className=' flex justify-center gap-2 sm:gap-10 mt-6 sm:mt-14 relative overflow-hidden animate-moveImages'>
    
    <div className='flex  items-center justify-center h-10 w-44 sm:h-28 sm:w-28 md:h-52 md:w-52 
    hover:-translate-y-2 hover:scale-110 bg-white rounded-full transition-transform delay-50 ' >
    {/* <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.4rem] font-semibold'>Pramod Sharma</p>
    <p className='sm:text-xs text-[0.6rem]'>UI Designer</p>  */}
    <img src={divyansiImg} alt="missing" className='rounded-full w-[100%]'/>
    </div>
    
    <div className='flex items-center justify-center h-10 w-44 sm:h-28 sm:w-28 md:h-52 md:w-52
    hover:-translate-y-2 hover:scale-110 bg-white rounded-full transition-transform delay-50 '>
    {/* <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.4rem] font-semibold'>Pramod Sharma</p>
    <p className='sm:text-xs text-[0.6rem]'>UI Designer</p>  */}
    <img src={mintImg} alt="missing" className='rounded-full'/>
    </div>

    <div className='flex  items-center justify-center h-10 w-44 sm:h-28 sm:w-28 md:h-52 md:w-52
    hover:-translate-y-2 hover:scale-110 bg-white rounded-full transition-transform delay-50 '>
    {/* <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.4rem] font-semibold'>Pramod Sharma</p>
    <p className='sm:text-xs text-[0.6rem]'>UI Designer</p>  */}
    <img src={agroImg} alt="missing" className=''/>
    </div>

    <div className='flex  items-center justify-center h-10 w-44 sm:h-28 sm:w-28 md:h-52 md:w-52
    hover:-translate-y-2 hover:scale-110  bg-white rounded-full transition-transform delay-50'>
    {/* <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.4rem] font-semibold'>Pramod Sharma</p>
    <p className='sm:text-xs text-[0.6rem]'>UI Designer</p>  */}
    <img src={navyaImg} alt="missing" className=''/>
    </div>

    <div className='flex items-center justify-center h-10 w-44 sm:h-28 sm:w-28 md:h-52 md:w-52
    hover:-translate-y-2 hover:scale-110  bg-white rounded-full transition-transform delay-50'>
    {/* <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.4rem] font-semibold'>Pramod Sharma</p>
    <p className='sm:text-xs text-[0.6rem]'>UI Designer</p>  */}
    <img src={ankitImg} alt="missing" className='rounded-full'/>
    </div>

    <div className='flex  items-center justify-center h-10 w-44 sm:h-28 sm:w-28 md:h-52 md:w-52
    hover:-translate-y-2 hover:scale-110  bg-white rounded-full transition-transform delay-50'>
    {/* <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.4rem] font-semibold'>Pramod Sharma</p>
    <p className='sm:text-xs text-[0.6rem]'>UI Designer</p>  */}
    <img src={aceImg} alt="missing" className='mt-2'/>
    </div>

    <div className='flex  items-center justify-center h-10 w-44 sm:h-28 sm:w-28 md:h-52 md:w-60
    hover:-translate-y-2 hover:scale-110 bg-white rounded-full transition-transform delay-50'>
    <p className=' sm:text-[2rem] text-[0.4rem]  text-red-600 font-semibold font-PlayFair shadow-lg'>Indian Silk</p>
    
    </div>

    </div>
    </div>
    </>
  )
}

export default OurTrainers