import React from 'react'
import TypewriterComponent from "typewriter-effect";

const Business = () => {
  return (
    <>
    <div className='mt-14 text-[1.5rem]  sm:text-[2rem] text-[#525FE1] text-center px-2'>
        <p>Streamline Your Business with Our End-to-End IT Solutions</p>  
    </div>

    <div className="font-semibold  text-center text-[1.5rem] sm:text-[2rem] text-[#00649E] hover:text-[#1D1D1D]">
    <TypewriterComponent 
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: "Star Mount Technology",
                  }}
                />

    </div>

    <div className='flex  justify-center mt-10' >
    <div className='flex flex-col items-center  bg-green-200 sm:w-[80%] rounded-md  py-6 px-4 sm:px-10 shadow-xl
    bg-[url("/Images/ellipse/1.png")] bg-cover'  >
        <p className='font-semibold text-center text-orange-500 text-xl sm:text-[2rem]'>What is CRM?</p>
        <p className='mt-4 text-center text-[#383838]'>CRM is a strategic approach and comprehensive set of tools designed to manage all your interactions  with customers and
         potential customers. It's like having a digital brain for your business, helping you:</p>
          
         <div className='flex flex-col items-start text-[#383838]'>
         <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Centralize customer data :</span>From contact information to 
         purchase history and preferences, store everything in one secure, accessible hub.</li>
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Streamline sales and marketing :</span>Manage leads, track opportunities, and personalize marketing campaigns for targeted engagement. </li>
        
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Deliver exceptional customer service :</span>Resolve issues quickly, anticipate needs, and build lasting relationships. </li>
        
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Gain valuable insights :</span>Analyze data to understand customer behavior, identify trends, and make data-driven decisions.</li>
        
         </div>  
        </div>    
    </div>

    <div className='mt-14 text-[1.5rem]  sm:text-[2rem] text-[#525FE1] text-center px-2'>
        <p>Ready to Unlock the Power of CRM ?</p>  
    </div>

    <div className='flex  justify-center mt-10'>
    <div className='flex flex-col items-center  bg-gray-200 sm:w-[80%] rounded-md  py-6 px-2 sm:px-10 shadow-xl
    bg-[url("/Images/ellipse/8.png")] bg-cover' >
        <p className='font-semibold text-center text-orange-500 text-xl sm:text-[2rem]'>Benefits of implementing a CRM</p>
          
         <div className='flex flex-col items-start text-[#383838]'>
         <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Increased customer satisfaction and loyalty :</span>Happy customers become repeat customers and brand advocates.
         </li>
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Improved sales productivity and efficiency:</span>Close more deals faster with organized workflows and automated tasks.. </li>
        
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Enhanced marketing ROI :</span>Target the right audience with personalized campaigns and measure their effectiveness. </li>
        
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Reduced operational costs :</span> Automate tasks, eliminate redundancies, and streamline processes.</li>
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Data-driven decision making :</span>Gain actionable insights to optimize your strategies and maximize results.</li>
         </div>  
        </div>    
    </div>
    </>
  )
}

export default Business