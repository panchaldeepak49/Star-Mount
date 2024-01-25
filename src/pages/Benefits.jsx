import React from 'react'
import erpImg from '/Images/crm.jpeg'

const Benefits = () => {
  return (
    <>
    <div className='flex justify-center '>
     <img src={erpImg}></img>
     
     </div>

    <div className='flex justify-center'>
     <div className='flex flex-col items-start mt-10 bg-blue-200 w-[70%] pb-6 pr-4 pl-4'>
        <p className='font-semibold text-orange-500 text-[2rem]'>Benefits of Choosing Us :</p>

        <li className='mt-6'><span className='font-semibold'>Experienced and Certified Team :</span>Our team of experienced and certified professionals has a proven track record of delivering <br></br> 
        successful IT projects.</li>
        <li className='mt-4'><span className='font-semibold'>Customized Solutions :</span>We don't believe in one-size-fits-all solutions. We work closely with you to understand your unique needs and
         develop customized solutions that meet your specific requirements. </li>
        
        <li className='mt-4'><span className='font-semibold'>Scalable and Secure Solutions : </span>We provide scalable and secure solutions that can grow with your business. </li>
        
        <li className='mt-4'><span className='font-semibold'>Ongoing Support:</span>We offer ongoing support and maintenance to ensure your IT systems are always running smoothly.</li>
        <li className='mt-4'><span className='font-semibold'>Website Development:</span>We design and develop responsive websites that are optimized for search engines and deliver a great<br></br>
         user experience.</li>
     </div>
     </div>
    </>
  )
}

export default Benefits