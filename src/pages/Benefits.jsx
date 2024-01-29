import React from 'react'
import warehouseImg from '/Images/logo1.png'

const Benefits = () => {
  return (
    <>
    <div className='flex justify-center mt-2'>
     <img src={warehouseImg} alt="missing" className='w-[30%]'></img>
     </div>

    <div className='flex justify-center'>
     <div className='flex flex-col items-start mt-10 bg-blue-200 sm:w-[70%] py-6 px-4 rounded-md
     bg-[url("/Images/ellipse/8.png")] bg-cover hover:border-2 border-orange-400 box-content transition-transform delay-50'>
        <p className='font-semibold text-orange-500 text-xl sm:text-[2rem]'>Benefits of Choosing Us :</p>

        <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Experienced and Certified Team :</span>Our team of experienced and certified professionals has a proven track record of delivering <br></br> 
        successful IT projects.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Customized Solutions :</span>We don't believe in one-size-fits-all solutions. We work closely with you to understand your unique needs and
         develop customized solutions that meet your specific requirements. </li>
        
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Scalable and Secure Solutions : </span>We provide scalable and secure solutions that can grow with your business. </li>
        
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Ongoing Support:</span>We offer ongoing support and maintenance to ensure your IT systems are always running smoothly.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Website Development:</span>We design and develop responsive websites that are optimized for search engines and deliver a great<br></br>
         user experience.</li>
     </div>
     </div>
    </>
  )
}

export default Benefits