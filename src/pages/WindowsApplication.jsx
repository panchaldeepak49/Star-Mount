import React from 'react'
import webImg from '/Images/New folder/webDesign1.jpeg'

const WindowsApplication = () => {
  return (
    <>
    <div className='flex flex-col sm:flex sm:flex-row items-center  w-full '>
    

      <div className='sm:w-[60%] px-6 sm:px-20'>
      <p className=' font-semibold text-orange-500 text-xl sm:text-[2rem]'>Windows Application</p>
      <p className='mt-6 text-xs sm:text-[1rem] text-gray-800'>A Windows application, also known as a Win32 application, 
      is a software program designed to run specifically on the Windows operating system. Unlike web applications
       that you access through a browser, Windows applications are installed directly on your computer and
        run independently. They typically have their own user interface (UI) with windows, menus, buttons,
        and other elements that you interact with directly.
         </p>
      </div>

      <img src={webImg} alt="missing" className='mt-6 sm:mt-0 sm:w-[35%] rounded-md'></img>
     </div>


     <div className='flex  justify-center mt-10'>
    <div className='flex flex-col items-center  bg-green-200 sm:w-[80%] rounded-xl  py-6 px-2 sm:px-10 shadow-xl
    bg-[url("/Images/ellipse/8.png")] bg-cover hover:border-2 border-orange-400 box-content transition-transform delay-50' >
        <p className='font-semibold text-center text-orange-500 text-xl sm:text-[2rem]'>Here are some key characteristics of Windows application:</p>
          
         <div className='flex flex-col items-start text-[#383838]'>
         <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Native :</span>They are built specifically for the Windows platform, taking advantage of its features and capabilities. This allows them to be more powerful and performant than web applications.
         </li>
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Stand Alone:</span>They run independently of a web browser and don't require an internet connection to function. This makes them ideal for tasks that need to be done offline. </li>
        
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Rich User Interface :</span>They typically have a more sophisticated and feature-rich UI compared to web applications. This provides a more immersive and interactive experience for users. </li>
        
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Local Installation :</span> They are installed directly on your computer's hard drive, which can take up storage space. However, this also makes them faster and more responsive than web applications, as they don't rely on network bandwidth.</li>
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Offline Access :</span>Unlike web applications, Windows applications can be used even when you are not connected to the internet. This is a major advantage for tasks that need to be done on the go or in areas with limited connectivity.</li>
         </div>  
        </div>    
    </div>
    </>
  )
}

export default WindowsApplication