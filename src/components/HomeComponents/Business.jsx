import React from 'react'
import TypewriterComponent from "typewriter-effect";

const Business = () => {
  return (
    <>
    <div className='mt-14 text-[1.5rem]  sm:text-[2rem] text-orange-500 text-center px-2'>
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
    <div className='flex flex-col items-center  bg-green-200 sm:w-[80%] rounded-xl  py-6 px-4 sm:px-10 shadow-xl
    bg-[url("/Images/ellipse/8.png")] bg-cover' data-aos="zoom-in" >
        <p className='font-semibold  text-orange-500 text-xl sm:text-[2rem]'>About Us</p>
        <p className='mt-4  text-[#383838]'>Star Mount Technology Pvt. Ltd. is a leading software development company based in India.
         We specialize in providing high-quality software solutions to businesses of all sizes, enabling them to achieve their critical IT objectives.</p>
        <p className='mt-4  text-[#383838]'>Our team of skilled developers is dedicated to delivering complex software solutions that meet our clients’
         unique requirements. We work closely with our clients to understand their business needs and provide customized solutions that are reliable, scalable, and cost-effective.</p> 
         <p className='mt-4  text-[#383838]'>At Star Mount Technology Pvt. Ltd., we believe in building long-term relationships with our clients. We are committed to providing 
         exceptional customer service and support, and we strive to exceed our clients’ expectations at every opportunity.</p>

         
         
        </div>    
    </div>

    {/* <div className='mt-14 text-[1.5rem]  sm:text-[2rem] text-[#525FE1] text-center px-2'>
        <p>Ready to Unlock the Power of CRM ?</p>  
    </div> */}

    <div className='flex  justify-center mt-20'>
    <div className='flex flex-col items-center  bg-gray-200 sm:w-[80%] rounded-xl  py-6 px-2 sm:px-10 shadow-xl
    bg-[url("/Images/ellipse/1.png")] bg-cover'data-aos="zoom-in" >
        <p className='font-semibold text-center text-orange-500 text-xl sm:text-[2rem]'>Our Mission</p> 
        <p className='mt-4'>Our mission is to be a global IT company that provides end-to-end software solutions to businesses of all
         sizes. We aim to build businesses based on value, speed, information, skills, and capabilities, and 
         to help our clients achieve their critical IT objectives.</p>
        </div>    
    </div>

    <div className='flex  justify-center mt-20'>
    <div className='flex flex-col items-center  bg-yellow-200 sm:w-[80%] rounded-xl  py-6 px-2 sm:px-10 shadow-xl
    bg-[url("/Images/ellipse/4.png")] bg-cover'data-aos="zoom-in" >
        <p className='font-semibold text-center text-orange-500 text-xl sm:text-[2rem]'>Our Vision</p> 
        <p className='mt-4'>Our vision is to be a world-class IT solution provider that delivers innovative and reliable
         software solutions to businesses around the globe. We are committed to aggressive growth in our current areas of 
         expertise and to acquiring expertise in other areas through strong relationships.</p>
        </div>    
    </div>
    </>
  )
}

export default Business