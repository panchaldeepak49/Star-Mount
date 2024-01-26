import React from 'react'
import erpImg from '/Images/erp1.jpeg'
import sesImg from '/Images/ses.jpeg'

const Erp = () => {

  return (
    <>
    <div className='flex justify-center '>
     <img src={erpImg} alt="missing" className='w-[35%]'></img>
     </div>

     <div className='flex  justify-center mt-10'>
    <div className='flex flex-col items-center bg-green-200 w-[70%] rounded-md  pt-2 pb-6 px-10'>
        <p className='font-semibold text-orange-500 text-[2rem]'>What is ERP?</p>
        <p className='mt-4 text-gray-800'>ERP is a unified software platform that integrates all
         your core business functions, from accounting and finance to inventory management, customer 
         relationship management (CRM), and supply chain management. It's like having a central nervous 
         system for your business, connecting all your departments and processes in a seamless flow.
         </p>
        <p></p>
        </div>    
    </div>

    <div className='flex justify-center'>
     <div className='flex flex-col items-start mt-10 bg-gray-200 w-[70%] pb-6 pr-4 pl-4'>
        <p className='font-semibold text-orange-500 text-[2rem]'>Benefits of Implementing ERP :</p>

        <li className='mt-6'><span className='font-semibold'>Increased Efficiency and Productivity :</span>Automate tasks, eliminate manual data entry, and streamline workflows to save time and resources.</li>
        <li className='mt-4'><span className='font-semibold'>Improved Visibility and Control:</span>Gain real-time insights into your entire operation, from finances to inventory levels, allowing you to make better decisions faster.</li>
        <li className='mt-4'><span className='font-semibold'>Enhanced Customer Satisfaction: </span>Deliver faster order fulfillment, improve communication, and resolve issues quickly, leading to happier customers.</li>
        <li className='mt-4'><span className='font-semibold'>Boosted Profitability:</span>Reduce costs through optimized inventory management, streamlined operations, and data-driven decision making.</li>
        <li className='mt-4'><span className='font-semibold'>Scalability and Growth:</span>Adapt your ERP system to your expanding business needs without costly disruption.</li>
     </div>
     </div>

     <div className='flex justify-center mt-10'>
     <img src={sesImg} alt="missing" className='w-[50%]'></img>
     </div>
    </>
  )
}

export default Erp