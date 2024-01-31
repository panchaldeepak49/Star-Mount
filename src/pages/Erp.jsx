import React,{useEffect} from 'react'
import erpImg from '/Images/erp2.jpeg'
import sesImg from '/Images/ses.jpeg'
import ellipse1 from '/Images/ellipse/1.png'
import myVideo from '/Images/video.mp4'

const Erp = () => {
    
  useEffect(() => {
    const video = document.getElementById('myVideo');
    video.play();

    return () => {
      video.pause();
    };
  }, []);
  

  return (
    <>
    <div className='flex justify-center mt-2'>
        <video id="myVideo" controls className='sm:w-[50%]' data-aos='zoom-in'  >
         <source src={myVideo} type="video/mp4" />
         Your browser does not support the video tag.
        </video>
      </div>


    <div className='flex flex-col sm:flex sm:flex-row items-center  w-full mt-10 '>
      <div className='sm:w-[60%] px-6 sm:px-32'>
      <p className=' font-semibold text-orange-500 text-xl sm:text-[2rem]'>What is ERP?</p>
      <p className='mt-6 text-xs sm:text-[1rem] text-gray-800'>ERP is a unified software platform that integrates all
         your core business functions, from accounting and finance to inventory management, customer 
         relationship management (CRM), and supply chain management. It's like having a central nervous 
         system for your business, connecting all your departments and processes in a seamless flow.
         </p>
      </div>
     <img src={erpImg} alt="missing" className='mt-10 sm:mt-0 sm:w-[35%] rounded-2xl'></img>
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
     bg-[url("/Images/ellipse/1.png")] bg-cover border-2 hover:border-orange-400 box-content transition-transform delay-50' data-aos='zoom-in'>
      {/* <img src={ellipse1} className='absolute z-50 w-[50%] h-60'></img> */}
        <p className='font-semibold text-orange-500 text-xl sm:text-[2rem]'>Benefits of Implementing ERP :</p>

        <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Increased Efficiency and Productivity :</span>Automate tasks, eliminate manual data entry, and streamline workflows to save time and resources.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Improved Visibility and Control:</span>Gain real-time insights into your entire operation, from finances to inventory levels, allowing you to make better decisions faster.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Enhanced Customer Satisfaction: </span>Deliver faster order fulfillment, improve communication, and resolve issues quickly, leading to happier customers.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Boosted Profitability:</span>Reduce costs through optimized inventory management, streamlined operations, and data-driven decision making.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Scalability and Growth:</span>Adapt your ERP system to your expanding business needs without costly disruption.</li>
     </div>
     </div>
       
       {/* Part- */}
     <div className='flex justify-center'>
     <div className='flex flex-col items-start mt-10 bg-yellow-200 sm:w-[70%] py-6 px-4 rounded-xl
     bg-[url("/Images/ellipse/4.png")] bg-cover border-2 hover:border-orange-400 box-content transition-transform delay-50' data-aos='zoom-in'>
      {/* <img src={ellipse1} className='absolute z-50 w-[50%] h-60'></img> */}
        <p className='font-semibold text-orange-500 text-xl sm:text-[2rem]'>Beyond the basics :</p>

        <li className='mt-6 text-xs sm:text-[1rem]'>Artificial intelligence (AI) and machine learning (ML) for predictive analytics and automated decision-making..</li>
        <li className='mt-4 text-xs sm:text-[1rem]'>Cloud-based deployments for easy scalability and accessibility.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'>Mobile apps for on-the-go access to critical data and insights.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'>Social collaboration tools for improved communication and team work.</li>
        
     </div>
     </div>

     <div className='flex justify-center'>
     <div className='flex flex-col items-start mt-10 bg-green-300 sm:w-[70%] py-6 px-4 rounded-xl
     bg-[url("/Images/ellipse/6.png")] bg-cover border-2 hover:border-orange-400 box-content transition-transform delay-50' data-aos='zoom-in'>
      {/* <img src={ellipse1} className='absolute z-50 w-[50%] h-60'></img> */}
        <p className='font-semibold text-orange-500 text-xl sm:text-[2rem]'>Finding the right ERP solution :</p>

        <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Your Industry and Specific Needs :</span>Look for solutions tailored to your business type.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Company Size and Budget :</span>Choose a system that scales with your growth.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Ease of Use and Implementation : </span>Ensure your team can adopt the new system smoothly.</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Integration Capabilities :</span>Seamlessly connect your ERP with existing tools and data sources.</li>
        
        
     </div>
     </div>
    

     <div className='flex justify-center mt-10' >
     <img src={sesImg} alt="missing" className='sm:w-[70%] px-2 sm:px-0' data-aos='zoom-in'  ></img>
     </div>
 
     
    </>
  )
}

export default Erp