import React from 'react'
import seoImg from '/Images/New folder/seo.jpeg'

const SEO = () => {
  return (
    <>
    <div className='flex flex-col sm:flex sm:flex-row items-center  w-full '>
    <img src={seoImg} alt="missing" className='sm:w-[35%] px-10 rounded-xl'></img>

      <div className='sm:w-[60%] px-6 sm:px-20'>
      <p className=' font-semibold text-orange-500 text-xl sm:text-[2rem]'>Search Engine Optimization</p>
      <p className='mt-6 text-xs sm:text-[1rem] text-gray-800'>Imagine SEO as a ladder: it helps your website climb higher in the search engine results pages (SERPs) when people search for keywords related to your content. 
      The higher you climb, the more likely people are to discover and engage with your website.
         </p>
      </div>
     
     </div>


     <div className='flex  justify-center mt-10'>
    <div className='flex flex-col items-center  bg-gray-200 sm:w-[80%] rounded-xl  py-6 px-2 sm:px-10 shadow-xl
    bg-[url("/Images/ellipse/1.png")] bg-cover border-2 hover:border-orange-400 box-content transition-transform delay-50' >
        <p className='font-semibold text-center text-orange-500 text-xl sm:text-[2rem]'>On page, SEO:</p>
          
         <div className='flex flex-col items-start text-[#383838]'>
         <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Content is King :</span>Create high-quality, informative, and engaging content that resonates with your target audience and includes relevant keywords.
         </li>
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Keywords, keywords, keywords:</span>Research and strategically incorporate relevant keywords throughout your website, including titles, meta descriptions, headings, and body text. </li>
        
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Structure Matters :</span>Ensure your website has a clear and logical structure with intuitive navigation, making it easy for both users and search engines to crawl and understand your content. </li>
        
        <li className='mt-2 text-xs sm:text-[1rem]'><span className='font-semibold'>Speed it Up :</span>Nobody likes a slow website. Optimize your website's loading speed for a smooth user experience, which search engines also favour .</li>
        
         </div>  
        </div>    
    </div>
    </>
  )
}

export default SEO