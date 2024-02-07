import React from 'react'
import rectangleFooterImg from '/Images/FooterImg/Rectangle 32.png'
import logoImg from "/Images/logo2.png"
import facebookImg from '/Images/FooterImg/facebook.png'
import instagramImg from '/Images/FooterImg/instagram.png'
import twitterImg from '/Images/FooterImg/twitter.png'
import emailImg from '/Images/FooterImg/email.png'
import phoneImg from '/Images/FooterImg/phone.png'

const Footer = () => {

  

  return (
    <>
   

<div className=' mt-10 flex lg:gap-20 md:gap-16 sm:gap-10 gap-2 bg-[#221957] pt-10 pb-10 overflow-x-hidden'>
 {/* footer part-1 */}
 <div className='ml-2 sm:ml-5 md:ml-10 sm:w-[28%] '>
     <img src={logoImg} className='w-[30%]'></img>
     <p className='text-white sm:text-sm text-[0.3rem] sm:mt-5 mt-3'>Star Mount Technology</p>
     <p className='text-white sm:text-sm text-[0.3rem]'>Plot No.304 Kh. No.-1074,Kapashera</p>
     <p className='text-white sm:text-sm text-[0.3rem]'>New Delhi-110037 India </p>
     <div className='flex gap-1 sm:gap-5 sm:mt-5 mt-3'>
         <div className='sm:h-7 sm:w-7 h-4 w-4 border rounded-full flex justify-center items-center'>
         <img src={facebookImg} className='sm:w-[20%] w-[15%] sm:h-[0.8rem] h-[0.5rem] '></img>
         </div>
         <div className='sm:h-7 sm:w-7 h-4 w-4 border rounded-full flex justify-center items-center'>
         <img src={instagramImg} className='sm:w-[40%] w-[30%] sm:h-[0.9rem] h-[0.5rem]'></img>
         </div>
         <div className='sm:h-7 sm:w-7 h-4 w-4 border rounded-full flex justify-center items-center'>
         <img src={twitterImg} className='sm:w-[40%] w-[30%] sm:h-[0.9rem] h-[0.5rem]'></img>
         </div>
     </div>
 </div>

 {/* footer part-2 */}
 <div className='flex flex-col sm:gap-4 gap-1 md:ml-0 sm:ml-0 '>
     <p className='text-white sm:text-[1.25rem] text-[0.7rem]'>Our Services</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>Mobile Application</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>Web Application</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>Windows Application</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>Search Engine Optimization</p>
 </div>

 {/* footer part-3 */}
 <div className='flex flex-col sm:gap-4 gap-1 '>
     <p className='text-white sm:text-[1.25rem] text-[0.7rem]'>Products</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>SMT ERP</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>SMT DMS</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>SMT CRM</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>SMT Warehouse Management</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>SMT Project Management</p>
 </div>

 {/* footer part-4 */}
 <div className='flex flex-col sm:gap-4 gap-2'>
     <p className='text-white sm:text-[1.25rem] text-[0.7rem]'>Help</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>Contact Us</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>FAQ</p>
 </div>
 
 {/* footer part-5 */}
 <div className='mt-5 mr-0 sm:mr-0 '>
     <div className='flex flex-col sm:flex-row sm:gap-4 gap-2'>
     <img src={emailImg} className='sm:w-[12%] w-[9%] sm:h-[0.8rem] h-[0.5rem]'></img>
     <p className='text-white sm:text-xs text-[0.5rem] '>info@starmounttechnology.com</p>
     </div>

    <div className='flex flex-col sm:flex-row sm:gap-4 gap-2 mt-2'>
     <img src={phoneImg} className='sm:w-[12%] w-[9%] sm:h-[0.8rem] h-[0.5rem]'></img>
     <p className='text-white sm:text-xs text-[0.5rem] '></p>
    </div>
 </div>

 </div>
    </>
  )
}

export default Footer