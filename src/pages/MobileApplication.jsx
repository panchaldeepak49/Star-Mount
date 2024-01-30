import React from 'react'
import mobileImg from '/Images/New folder/mobileApp.jpeg'

const MobileApplication = () => {
  return (
    <>
      <div className='flex flex-col sm:flex sm:flex-row items-center  w-full '>
      <div className='sm:w-[60%] px-6 sm:px-20'>
      <p className=' font-semibold text-orange-500 text-xl sm:text-[2rem]'>Mobile Apps</p>
      <p className='mt-6 text-xs sm:text-[1rem] text-gray-800'>Imagine this: Think of your phone as a blank canvas.
       Mobile apps are like colorful paints that fill it with functionality and personalize your experience.
      Each app, whether a simple calculator or a complex game, adds its own unique touch to your digital
      life.
         </p>
      </div>
     <img src={mobileImg} alt="missing" className='w-[35%]'></img>
     </div>



     <div className='flex  justify-center mt-10'>
    <div className='flex flex-col items-center  bg-green-200 sm:w-[80%]  rounded-xl  py-6 px-2 sm:px-10 shadow-xl
    bg-[url("/Images/ellipse/8.png")] bg-cover border-2  hover:border-orange-400 box-content transition-transform delay-50' >
        <p className='font-semibold text-center text-orange-500 text-xl sm:text-[2rem]'>Here's what make mobile apps stand out:</p>
          
         <div className='flex flex-col items-start text-[#383838]'>
         <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Pocket Sized Power :</span>They're designed for on-the-go use, leveraging the unique features of your smartphone or tablet, like touchscreens, GPS and cameras.
         </li>
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Always Connected:</span>Many apps tap into the internet to deliver real-time information and updates, keeping you connected to the world wherever you are. </li>
        
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Tailored Experience :</span>From news feeds to personalized playlists, apps can be customized to your preferences and interests, making them feel like they were built just for you. </li>
        
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Convenience at your fingertips :</span> Need to hail a taxi, order food, or book a doctor's appointment? There's likely an app for that, simplifying everyday tasks and saving you time.</li>
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>A Universe of Possibilities :</span>With millions of apps available in various categories like games, social media, productivity tools, and educational resources, there's something for everyone.</li>
         </div>  
        </div>    
    </div>
    </>
  )
}

export default MobileApplication