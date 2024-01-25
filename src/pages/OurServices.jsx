import React from 'react'
import erpImg from '/Images/erp.jpeg'

const OurServices = () => {
  return (
    <>
    <div className='flex justify-center '>
     <img src={erpImg}></img>
     
     </div>

    <div className='flex justify-center'>
     <div className='flex flex-col items-start mt-10 bg-green-200 w-[70%] pb-6 pr-4 pl-4'>
        <p className='font-semibold text-orange-500 text-[2rem]'>Our Services :</p>

        <li className='mt-6'><span className='font-semibold'>Enterprise Resource Planning(ERP) :</span>We implement and customize ERP systems that streamline your core business processes,<br></br> 
         from accounting and finance to inventory management and customer relationship management.</li>
        <li className='mt-4'><span className='font-semibold'>	Document Management System (DMS):</span>We help you organize and store your documents electronically, making them easily <br></br>
        accessible and searchable, which improves collaboration and saves time</li>
        <li className='mt-4'><span className='font-semibold'>Content Management System (CMS): </span>We help you organize and store your documents electronically, making them easily ac <br></br>
        accessible and searchable, which improves collaboration and saves time</li>
        <li className='mt-4'><span className='font-semibold'>Mobile App Development:</span>We develop custom mobile apps that meet your specific needs and engage your target audience.</li>
        <li className='mt-4'><span className='font-semibold'>Website Development:</span>We design and develop responsive websites that are optimized for search engines and deliver a great<br></br>
         user experience.</li>
     </div>
     </div>
    </>
  )
}

export default OurServices