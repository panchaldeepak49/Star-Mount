import React from 'react'
import wareHouseImg from '/Images/New2/Warehouse.jpeg'

const WarehouseManagement = () => {
  return (
    <>
    <div className='flex flex-col sm:flex sm:flex-row items-center  w-full '>
      <div className='sm:w-[60%] px-6 sm:px-36  '>
      <p className=' font-semibold text-orange-500 text-xl sm:text-[2rem]'>What is Warehouse Management?</p>
      <p className='mt-6 text-xs sm:text-[1rem] text-gray-800'>Warehouse Management encompasses the principles and processes 
      involved in running the day-to-day operations of a warehouse.It involves optimizing and integrating each of 
      those processes to ensure all aspects of a warehouse operation work together to increase productivity
      and keep cost low. 
         
         </p>
      </div>
     <img src={wareHouseImg} alt="missing" className='w-[30%] mt-4 sm:mt-0'></img>
     </div>




    <div className='flex justify-center'>
     <div className='flex flex-col items-start mt-10 bg-gray-200 sm:w-[70%] py-6 px-4 sm:px-4 rounded-md
     bg-[url("/Images/ellipse/6.png")] bg-cover bg-no-repeat font-Syne' data-aos="zoom-in" >
        <p className='font-semibold text-orange-500 text-xl sm:text-[2rem] font-Syne'>Warehouse Management Software Product features of interest :</p>

        <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Inventory Management :</span>This feature is one of the most significant warehouse management system features.
         It’s a must-have to maintain inventory levels. Some major components of robust inventory management
        include inventory visibility, forecasting, purchasing history, tracking, analysis and accounting. 
        </li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Warehouse Automation :</span>This feature automates the warehouse operations,
         which includes receiving, put away, picking, packing, and shipping.
          </li>
        
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Order Picking : </span>This feature helps in optimizing the order picking process by determining the best route for the picker to follow. </li>
        
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Put away :</span>This feature helps in optimizing the put away process by 
        determining the best location for the products to be stored.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Return Management :</span>Automates the process of handling product returns by tracking returned items and
         updating inventory levels. This reduces stock discrepancies and improves the return management process.</li>
         <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Quality Management :</span>Maintains consistent quality standards in manufacturing processes by creating 
         quality control plans, conducting inspections and tests, managing non-conformances, and ensuring regulatory compliance.</li>
         <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Reports and Analytics :</span>This feature provides various reports and analytics to help in decision-making,
          which includes inventory reports, order reports, and performance reports.</li>
         <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Time Tracking :</span>Track employee time to monitor business operations, such as payroll, invoicing, and 
         project costing. This allows you to capture and review employee hours, track billable and non-billable time, and generate accurate invoices or payroll reports.</li>

     </div>
     </div>
    </>
  )
}

export default WarehouseManagement