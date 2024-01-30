import React,{useState} from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Cards = () => {

    const navigate = useNavigate();

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);

  return (
    <>
    <div className='mt-10 flex justify-center'>
        <p className='sm:text-[4rem] text-[2rem] text-[#525FE1] font-semibold'>Our Products</p>
    </div>


    <div className='flex justify-center mt-10'>
    <div className='grid sm:grid-cols-4 grid-cols-1 gap-10 sm:w-[80%] '>
        {/* Card-1 */}
        <div className=' w-[100%]'
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
        >
        <div className={`absolute flex justify-center items-center  sm:ml-[4%] ml-[35%] sm:h-[19%] h-[18%] 
        sm:w-[9%] w-[30%] rounded-full bg-white ${isHovered1 ? 'scale-110' : '' } `} >
            <div className='h-[80%] w-[80%] rounded-full bg-green-200'>
                
            </div>
        </div>

        <div className='flex flex-col items-center justify-evenly sm:w-[100%] mt-20 h-60  bg-green-200 rounded-xl hover:rounded-full 
        transition-transform delay-150' >
            <p className='font-sans text-[1.5rem] mt-10'>SMT DMS</p>
            <p className=' font-OpenSans px-6 text-center text-black-200'>optimize your multichain restaurant operations</p>
            
            <a href='/dms' className='flex justify-center items-center gap-2 text-red-600 font-semibold'>Learn More 
            <MdArrowRightAlt  className={ isHovered1 ? 'absolute ml-[6%] translate-x-4 transition-transform delay-300' : 'hidden ' } />
            </a>
        </div>

        </div>
        {/* Card-2 */}
        <div className=' w-[100%]'
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
        >
        <div className={`absolute flex justify-center items-center  sm:ml-[4%] ml-[35%] sm:h-[19%] h-[18%] 
        sm:w-[9%] w-[30%] rounded-full bg-white ${isHovered2 ? 'scale-110' : '' } `} >
            <div className='h-[80%] w-[80%] rounded-full bg-gray-200'>
                
            </div>
        </div>

        <div className='flex flex-col items-center justify-evenly sm:w-[100%] mt-20 h-60  bg-gray-200 rounded-xl hover:rounded-full 
        transition-transform delay-150' >
            <p className='font-sans text-[1.5rem] mt-10'>SMT CRM</p>
            <p className=' font-OpenSans px-6 text-center text-black-200'>optimize your multichain restaurant operations</p>
            
            <a href='/crm' className='flex justify-center items-center gap-2 text-red-600 font-semibold'>Learn More 
            <MdArrowRightAlt  className={ isHovered2 ? 'absolute ml-[6%] translate-x-4 transition-transform delay-300' : 'hidden ' } />
            </a>
        </div>

        </div>
        
         {/* Card-3 */}
         <div className=' w-[100%]'
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
        >
        <div className={`absolute flex justify-center items-center  sm:ml-[4%] ml-[35%] sm:h-[19%] h-[18%] 
        sm:w-[9%] w-[30%] rounded-full bg-white ${isHovered3 ? 'scale-110' : '' } `} >
            <div className='h-[80%] w-[80%] rounded-full bg-blue-200'>
                
            </div>
        </div>

        <div className='flex flex-col items-center justify-evenly sm:w-[100%] mt-20 h-60  bg-blue-200 rounded-xl hover:rounded-full 
        transition-transform delay-150' >
            <p className='font-sans text-[1.5rem] mt-10'>Manufacturing</p>
            <p className=' font-OpenSans px-6 text-center text-black-200'>optimize your multichain restaurant operations</p>
            
            <a href='/erp' className='flex justify-center items-center gap-2 text-red-600 font-semibold'>Learn More 
            <MdArrowRightAlt  className={ isHovered3 ? 'absolute ml-[6%] translate-x-4 transition-transform delay-300' : 'hidden ' } />
            </a>
        </div>

        </div>
         {/* Card-4 */}
         <div className=' w-[100%]'
        onMouseEnter={() => setIsHovered4(true)}
        onMouseLeave={() => setIsHovered4(false)}
        >
        <div className={`absolute flex justify-center items-center  sm:ml-[4%] ml-[35%] sm:h-[19%] h-[18%] 
        sm:w-[9%] w-[30%] rounded-full bg-white ${isHovered4 ? 'scale-110' : '' } `} >
            <div className='h-[80%] w-[80%] rounded-full bg-red-200'>
                
            </div>
        </div>

        <div className='flex flex-col items-center justify-evenly sm:w-[100%] mt-20 h-60  bg-red-200 rounded-xl hover:rounded-full 
        transition-transform delay-150' >
            <p className='font-sans text-[1.5rem] mt-10'>Warehouse</p>
            <p className=' font-OpenSans px-6 text-center text-black-200'>optimize your multichain restaurant operations</p>
            
            <a href='#' className='flex justify-center items-center gap-2 text-red-600 font-semibold'>Learn More 
            <MdArrowRightAlt  className={ isHovered4 ? 'absolute ml-[6%] translate-x-4 transition-transform delay-300' : 'hidden ' } />
            </a>
        </div>

        </div>
        
        

    </div>
    </div>
    </>
  )
}

export default Cards