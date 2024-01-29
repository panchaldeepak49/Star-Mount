import React from 'react'
import erpImg from '/Images/erp2.jpeg'
import sesImg from '/Images/ses.jpeg'
import ellipse1 from '/Images/ellipse/1.png'

const Erp = () => {

  return (
    <>
    <div className='flex flex-col sm:flex sm:flex-row items-center  w-full '>
      <div className='sm:w-[60%] px-6 sm:px-32'>
      <p className=' font-semibold text-orange-500 text-xl sm:text-[2rem]'>What is ERP?</p>
      <p className='mt-6 text-xs sm:text-[1rem] text-gray-800'>ERP is a unified software platform that integrates all
         your core business functions, from accounting and finance to inventory management, customer 
         relationship management (CRM), and supply chain management. It's like having a central nervous 
         system for your business, connecting all your departments and processes in a seamless flow.
         </p>
      </div>
     <img src={erpImg} alt="missing" className='w-[35%]'></img>
     </div>

     {/* <div className='flex  justify-center mt-10'>
    <div className='flex flex-col items-center bg-green-200 w-[70%] rounded-md  pt-2 pb-6 px-10'>
        <p className='font-semibold text-orange-500 text-[2rem]'>What is ERP?</p>
        <p className='mt-4 text-gray-800'>ERP is a unified software platform that integrates all
         your core business functions, from accounting and finance to inventory management, customer 
         relationship management (CRM), and supply chain management. It's like having a central nervous 
         system for your business, connecting all your departments and processes in a seamless flow.
         </p>
        </div>    
    </div> */}

    <div className='flex justify-center'>
     <div className='flex flex-col items-start mt-10 bg-gray-200 sm:w-[70%] py-6 px-4 rounded-xl
     bg-[url("/Images/ellipse/1.png")] bg-cover hover:border-2 border-orange-400 box-content transition-transform delay-50'>
      {/* <img src={ellipse1} className='absolute z-50 w-[50%] h-60'></img> */}
        <p className='font-semibold text-orange-500 text-xl sm:text-[2rem]'>Benefits of Implementing ERP :</p>

        <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Increased Efficiency and Productivity :</span>Automate tasks, eliminate manual data entry, and streamline workflows to save time and resources.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Improved Visibility and Control:</span>Gain real-time insights into your entire operation, from finances to inventory levels, allowing you to make better decisions faster.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Enhanced Customer Satisfaction: </span>Deliver faster order fulfillment, improve communication, and resolve issues quickly, leading to happier customers.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Boosted Profitability:</span>Reduce costs through optimized inventory management, streamlined operations, and data-driven decision making.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Scalability and Growth:</span>Adapt your ERP system to your expanding business needs without costly disruption.</li>
     </div>
     </div>

     <div className='flex justify-center mt-10' >
     <img src={sesImg} alt="missing" className='w-[50%]' data-aos='zoom-in'  ></img>
     </div>
    </>
  )
}

export default Erp