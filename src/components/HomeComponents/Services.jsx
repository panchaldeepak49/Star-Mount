import React from 'react'
import Button from '../GlobalComponents/Button'
import mobileImg from '/Images/New folder/mobileApp.jpeg'
import webImg from '/Images/New folder/webDesign1.jpeg'
import webDesignImg from '/Images/New folder/webDesign.jpeg'
import seoImg from '/Images/New folder/seo.jpeg'
import { useNavigate } from 'react-router-dom'

const Services = () => {

    const navigate = useNavigate();
  return (
    <>
    <div className='mt-20 flex justify-center'>
        <p className='sm:text-[4rem] text-[2rem] text-[#525FE1] font-semibold'>Our Services</p>
    </div>

    <p className='text-center mt-6 text-xl sm:text-[2rem] font-semibold text-[#383838]'>Mobile Application</p>
    
    <div className='flex justify-center'>
    <div className='flex flex-col sm:flex sm:flex-row sm:justify-between items-center sm:w-[70%] mt-6 '>
      <div className='sm:w-[50%] px-6 sm:px-7 bg-gradient-to-r from-orange-300 to-red-200 
       rounded-md hover:rounded-full transition-transform delay-300 ease-in'>
      <p className='mt-6 text-xs sm:text-[1rem]  text-[#383838]'>Mobile applications or simply apps, are software programs designed 
      specifically for your smartphone or tablet. They're like tiny, specialized companions on your device,
       catering to everything from entertainment and social interaction to productivity and essential services.
         </p>
         <div className='flex justify-center mt-4 py-4' onClick={()=>navigate('/mobileApplication')}>
         <Button text={"Know more"}></Button>
         </div>
      </div>

     <img src={mobileImg} alt="missing" className='sm:w-[30%] mt-4 sm:mt-0 hover:scale-110 transition-transform delay-50' data-aos="zoom-in"></img>
     </div>
     </div>

     
     <p className='text-center mt-10 text-xl sm:text-[2rem] font-semibold text-[#383838]'>Web Design</p>
     <div className='flex justify-center '>
    <div className='flex flex-col sm:flex sm:flex-row sm:justify-between items-center sm:w-[70%] mt-6 '>
    <img src={webDesignImg} alt="missing" className='sm:w-[40%] hover:scale-110 transition-transform delay-50 rounded-md' data-aos="zoom-in"></img>

      <div className='sm:w-[50%] mt-6 sm:mt-0 px-6 sm:px-7 bg-gradient-to-r from-red-300 to-orange-400 
       rounded-md hover:rounded-full transition-transform delay-300'>
      <p className='mt-6 text-xs sm:text-[1rem] text-[#383838]'>Web design, the architect of the digital world, is 
      more than just making things look pretty. It's about crafting websites that are as visually appealing
       as they are functional and intuitive. Imagine browsing a well-designed website; it's like walking into
        a beautifully organized and thoughtfully decorated home – everything has its place, and you just feel comfortable and engaged.
         </p>
         <div className='flex justify-center mt-4 py-4' onClick={()=>navigate('/webApplication')}>
         <Button text={"Know more"} ></Button>
         </div>
      </div>
     </div>
     </div>



     <p className='text-center mt-10 text-xl sm:text-[2rem] font-semibold text-[#383838]'>Windows Application</p>
    
    <div className='flex justify-center'>
    <div className='flex flex-col sm:flex sm:flex-row sm:justify-between items-center sm:w-[70%] mt-6 '>
      <div className='sm:w-[50%] px-6 sm:px-7 bg-gradient-to-r from-orange-300 to-red-300 via-green-200 
        rounded-md hover:rounded-full transition-transform delay-300'>
      <p className='mt-6 text-xs sm:text-[1rem] text-[#383838] '>A Windows application, also known as a Win32 application, 
      is a software program designed to run specifically on the Windows operating system. Unlike web applications
    that you access through a browser, Windows applications are installed directly on your computer and
     run independently. They typically have their own user interface (UI) with windows, menus, buttons,
    and other elements that you interact with directly.
         </p>
         <div className='flex justify-center mt-4 py-4' onClick={()=>navigate('/windowsApplication')}>
         <Button text={"Know more"} ></Button>
         </div>
      </div>
      
     <img src={webImg} alt="missing" className='  sm:w-[30%] mt-4 sm:mt-0 hover:scale-110 transition-transform delay-50' data-aos="zoom-in"></img>
     </div>
     </div>


     <p className='text-center mt-10 text-xl sm:text-[2rem] font-semibold text-[#383838]'>Search Engine Optimization</p>
     <div className='flex justify-center '>
    <div className='flex flex-col sm:flex sm:flex-row sm:justify-between items-center sm:w-[70%] mt-6 '>
    <img src={seoImg} alt="missing" className='sm:w-[40%] hover:scale-110 transition-transform delay-50 rounded-md' data-aos="zoom-in"></img>

      <div className='sm:w-[50%] mt-6 sm:mt-0 px-6 sm:px-7 bg-gradient-to-r from-red-400 to-orange-400 via-green-200 
       rounded-md hover:rounded-full transition-transform delay-300'>
      <p className='mt-6 text-xs sm:text-[1rem] text-[#383838]'>Think of the internet as a vast library, and search engines like 
      Google are the librarians. Just like you wouldn't want your favourite book buried deep in the back
       shelves, you don't want your website lost in the endless pages of search results. That's where 
       Search Engine Optimization (SEO) comes in.
         </p>
         <div className='flex justify-center mt-4 py-4' onClick={()=>navigate('/seo')}>
         <Button text={"Know more"} ></Button>
         </div>
      </div>
     </div>
     </div>
    </>
  )
}

export default Services