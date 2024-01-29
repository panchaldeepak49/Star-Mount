import React from 'react'


const OurTrainers = () => {
  return (
    <>
    <div className='mt-20 flex justify-center'>
        <p className='sm:text-[4rem] text-[2rem] text-[#525FE1] font-semibold'>Our Partners</p>
    </div>

    <div className=' flex justify-center gap-10 mt-14 w-[100%] relative animate-moveImages'>

    <div className='flex flex-col items-center justify-center h-16 w-16 sm:h-28 sm:w-28 md:h-52 md:w-52 
    hover:-translate-y-2 hover:scale-110 bg-orange-300 rounded-full transition-transform delay-50' >
    <p className='sm:mt-5 mt-3 sm:text-[1rem] text-xs font-semibold'>Pramod Sharma</p>
    <p className='text-xs'>UI Designer</p> 
    </div>
    
    <div className='flex flex-col items-center justify-center h-16 w-16 sm:h-28 sm:w-28 md:h-52 md:w-52
    hover:-translate-y-2 hover:scale-110 bg-red-200 rounded-full transition-transform delay-50'>
    <p className='sm:mt-5 mt-3 sm:text-[1rem] text-xs font-semibold'>Pramod Sharma</p>
    <p className='text-xs'>UI Designer</p> 
    </div>

    <div className='flex flex-col items-center justify-center h-16 w-16 sm:h-28 sm:w-28 md:h-52 md:w-52
    hover:-translate-y-2 hover:scale-110 bg-green-200 rounded-full transition-transform delay-50'>
    <p className='sm:mt-5 mt-3 sm:text-[1rem] text-xs font-semibold'>Pramod Sharma</p>
    <p className='text-xs'>UI Designer</p> 
    </div>

    <div className='flex flex-col items-center justify-center h-16 w-16 sm:h-28 sm:w-28 md:h-52 md:w-52
    hover:-translate-y-2 hover:scale-110  bg-blue-200 rounded-full transition-transform delay-50'>
    <p className='sm:mt-5 mt-3 sm:text-[1rem] text-xs font-semibold'>Pramod Sharma</p>
    <p className='text-xs'>UI Designer</p> 
    </div>

    </div>
    </>
  )
}

export default OurTrainers