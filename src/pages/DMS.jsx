import React from 'react'
import dmsImg from '/Images/dms.jpeg'
import TypewriterComponent from "typewriter-effect";

const DMS = () => {
  return (
    <>
    <p className='flex justify-center font-semibold text-orange-500 p-2 text-xl sm:text-[2rem]'>Streamline Your Distribution with a Powerful DMS </p>
    <div className='flex justify-center mt-10'>
     <img src={dmsImg} alt="missing" className='h-80'></img>
     
     </div>

    <div className='flex justify-center'>
     <div className='flex flex-col items-center mt-10 bg-blue-200 sm:w-[70%] py-6 px-4  rounded-md' >
        <p className='text-center  font-semibold text-orange-500 text-xl sm:text-[2rem]'>Boost Efficiency and Visibility with a next-generation </p>
        <p className='text-xl sm:text-[2rem] font-semibold mt-4 text-blue-500'>
        <TypewriterComponent 
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: "Distributor Management System",
                  }}
                />
        </p>
        <p className='mt-6 text-xs sm:text-[1rem]'>Managing a complex distribution network is no easy feat. Juggling orders, inventory, deliveries, and distributor relationships can be a logistical nightmare. But what if there was a way to automate tasks, gain real-time insights, and empower your distributors? Introducing our cutting-edge Distributor Management System (DMS), your key to streamlined distribution and optimized business growth.</p>
     </div>
     </div>

     <div className='flex justify-center'>
     <div className='flex flex-col items-start mt-10 bg-gray-200 sm:w-[70%] py-6 px-4 sm:px-4 rounded-md
     bg-[url("/Images/ellipse/6.png")] bg-cover bg-no-repeat' data-aos="zoom-in" >
        <p className='font-semibold text-orange-500 text-xl sm:text-[2rem]'>Our DMS empowers you to :</p>

        <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Simplify Order Management :</span>Create, process, and track orders online, eliminating manual paperwork and errors. 
        </li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Optimize Inventory Management :</span>Gain real-time visibility into inventory levels across all distributors, preventing stockouts and overstocking.
          </li>
        
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Automate Delivery Planning : </span>Route deliveries efficiently, reduce transportation costs, and improve on-time delivery rates. </li>
        
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Enhance Distributor Performance:</span>Track individual distributor performance and provide targeted support to maximize sales and efficiency.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Unlock Powerful Insights:</span>Track individual distributor performance and provide targeted support to maximize sales and efficiency.
         </li>
         <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Improve Customer Satisfaction:</span>Reduce order errors, shorten delivery times, and provide a seamless experience for your customers.
         </li>
     </div>
     </div>

     <div className='flex justify-center'>
     <div className='flex flex-col items-start mt-10 bg-pink-200  sm:w-[70%] py-6 px-4 rounded-md
     bg-[url("/Images/ellipse/5.png")] bg-cover bg-no-repeat' data-aos="zoom-in">
        <p className='font-semibold text-orange-500 text-xl sm:text-[2rem]' >Our DMS stands out with :</p>

        <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>User-friendly interface :</span>Simple and intuitive for both you and your distributors.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Mobile accessibility :</span>Manage operations and access data on the go from any device. </li>
        
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Scalable solutions: </span>Adapt to your growing business needs with ease. </li>
        
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Robust security:</span>Secure your data with advanced encryption and access controls.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Seamless integrations:</span> Connect seamlessly with your existing ERP, CRM, and accounting systems.</li>
         
     </div>
     </div>
    </>
  )
}

export default DMS