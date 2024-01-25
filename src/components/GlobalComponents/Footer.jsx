import React from 'react'
import rectangleFooterImg from '/Images/FooterImg/Rectangle 32.png'
import facebookImg from '/Images/FooterImg/facebook.png'
import instagramImg from '/Images/FooterImg/instagram.png'
import twitterImg from '/Images/FooterImg/twitter.png'
import emailImg from '/Images/FooterImg/email.png'
import phoneImg from '/Images/FooterImg/phone.png'

const Footer = () => {

  

  return (
    <>
   

<div className=' mt-10 flex lg:gap-24 md:gap-16 sm:gap-10 gap-2 bg-[#221957] pt-10 pb-10'>
 {/* footer part-1 */}
 <div className='ml-2 sm:ml-10'>
     <img src={""} className='w-[15%]'></img>
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
 <div className='flex flex-col sm:gap-4 gap-1 md:ml-14 sm:ml-5 '>
     <p className='text-white sm:text-[1.25rem] text-[0.7rem]'>Our Services</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>ERP</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>CMS</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>DMS</p>
 </div>

 {/* footer part-3 */}
 <div className='flex flex-col sm:gap-4 gap-1 '>
     <p className='text-white sm:text-[1.25rem] text-[0.7rem]'>About</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>About Us</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>Hiring</p>
     <p className='text-white sm:text-xs text-[0.5rem] cursor-pointer' onClick={()=>navigate('/privacy')}>Privacy Policy</p>
 </div>

 {/* footer part-4 */}
 <div className='flex flex-col sm:gap-4 gap-2'>
     <p className='text-white sm:text-[1.25rem] text-[0.7rem]'>Help</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>Contact Us</p>
     <p className='text-white sm:text-xs text-[0.5rem]'>FAQ</p>
 </div>
 
 {/* footer part-5 */}
 <div className='mt-5 mr-4 sm:mr-0'>
     <div className='flex sm:gap-4 gap-2'>
     <img src={emailImg} className='sm:w-[12%] w-[10%] sm:h-[0.8rem] h-[0.6rem]'></img>
     <p className='text-white sm:text-xs text-[0.5rem]'>anil.singh@starmounttechnology.com</p>
     </div>

    <div className='flex sm:gap-4 gap-2 mt-2'>
     <img src={phoneImg} className='sm:w-[12%] w-[10%] sm:h-[0.8rem] h-[0.6rem]'></img>
     <p className='text-white sm:text-xs text-[0.5rem] '>+91-9990300304</p>
    </div>
 </div>

 </div>
    </>
  )
}

export default Footer