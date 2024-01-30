import React from 'react'
import webImg from '/Images/New folder/webDesign1.jpeg'

const WebApplication = () => {
  return (
    <>
    <div className='flex flex-col sm:flex sm:flex-row items-center  w-full '>
    <img src={webImg} alt="missing" className='sm:w-[35%] px-10'></img>

      <div className='sm:w-[60%] px-6 sm:px-20'>
      <p className=' font-semibold text-orange-500 text-xl sm:text-[2rem]'>Web Apps</p>
      <p className='mt-6 text-xs sm:text-[1rem] text-gray-800'>A web application, unlike its cousin
       the Windows application, is software you access through a web browser instead of installing directly
        on your computer. Think of it like visiting a restaurant; you don't need to bring your own kitchen
        equipment, just an internet connection and a device to access the "restaurant" (website).
         </p>
      </div>
     
     </div>


     <div className='flex  justify-center mt-10'>
    <div className='flex flex-col items-center  bg-gray-200 sm:w-[80%] rounded-md  py-6 px-2 sm:px-10 shadow-xl
    bg-[url("/Images/ellipse/1.png")] bg-cover border-2 hover:border-orange-400 box-content transition-transform delay-50' >
        <p className='font-semibold text-center text-orange-500 text-xl sm:text-[2rem]'>Here are some key characteristics of Web Applications:</p>
          
         <div className='flex flex-col items-start text-[#383838]'>
         <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Web based :</span>Accessible through any web browser (Chrome, Firefox, Safari, etc.) from any device with an internet connection.
         </li>
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Platform Independent:</span>Runs on virtually any operating system (Windows, mac OS, Linux) without needing dedicated installation. </li>
        
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Light Weight :</span>Doesn't consume storage space on your device as it runs on the server in the cloud. </li>
        
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Regular Updates :</span> Developers can easily update the application centrally, ensuring everyone has the latest version.</li>
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Scalability :</span>Can handle a large number of users simultaneously without requiring additional hardware on your end.</li>
         </div>  
        </div>    
    </div>
    </>
  )
}

export default WebApplication