import React,{useState} from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import dmsImg from '/Images/dms2.jpeg'
import wareHouseImg from '/Images/New2/Warehouse.jpeg'
import distributionImg from '/Images/New2/Warehouse1.jpeg'
import crmImg from '/Images/New2/crm1.jpeg'
import manufacturingImg from '/Images/New2/manufacturing.jpeg'

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
        <div className=' w-[100%] px-2 sm:px-0'
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
        >
        <div className={`absolute flex justify-center items-center  sm:ml-[4%] ml-[35%] sm:h-[19%] h-[18%] 
        sm:w-[9%] w-[30%] rounded-full bg-white ${isHovered1 ? 'scale-110' : '' } `} >
            <div className='h-[80%] w-[80%] rounded-full bg-white'>
               <img src={distributionImg}  alt="missing" />
            </div>
        </div>

        <div className='flex flex-col items-center justify-evenly sm:w-[100%] mt-20 h-60  bg-green-200 rounded-xl hover:rounded-full 
        transition-transform delay-150' >
            <p className='font-Syne text-[1.5rem] mt-10 '>SMT DMS</p>
            <p className=' font-OpenSans px-6 text-center text-black-200'>optimizing flow for distribution success</p>
            
            <p className='flex justify-center items-center gap-2 text-red-600 font-semibold cursor-pointer'
            onClick={()=>navigate('/dms')}>Learn More 
            <MdArrowRightAlt  className={ isHovered1 ? 'absolute ml-[20%] sm:ml-[6%] translate-x-4 transition-transform delay-300' : 'hidden ' } />
            </p>
        </div>

        </div>
        {/* Card-2 */}
        <div className=' w-[100%] px-2 sm:px-0'
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
        >
        <div className={`absolute flex justify-center items-center  sm:ml-[4%] ml-[35%] sm:h-[19%] h-[18%] 
        sm:w-[9%] w-[30%] rounded-full bg-white ${isHovered2 ? 'scale-110' : '' } `} >
            <div className='h-[80%] w-[80%] rounded-full bg-gray-200'>
               <img src={crmImg}  alt="missing" className='rounded-full'/>
            </div>
        </div>

        <div className='flex flex-col items-center justify-evenly sm:w-[100%] mt-20 h-60  bg-gray-200 rounded-xl hover:rounded-full 
        transition-transform delay-150' >
            <p className='font-Syne text-[1.5rem] mt-10'>SMT CRM</p>
            <p className=' font-OpenSans px-6 text-center text-black-200'>reduce operational cost and optimize goods</p>
            
            <p className='flex justify-center items-center gap-2 text-red-600 font-semibold cursor-pointer'
            onClick={()=>navigate('/crm')}>Learn More 
            <MdArrowRightAlt  className={ isHovered2 ? 'absolute ml-[20%] sm:ml-[6%] translate-x-4 transition-transform delay-300' : 'hidden ' } />
            </p>
        </div>

        </div>
        
         {/* Card-3 */}
         <div className=' w-[100%] px-2 sm:px-0'
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
        >
        <div className={`absolute flex justify-center items-center  sm:ml-[4%] ml-[35%] sm:h-[19%] h-[18%] 
        sm:w-[9%] w-[30%] rounded-full bg-white ${isHovered3 ? 'scale-110' : '' } `} >
            <div className='h-[80%] w-[80%] rounded-full bg-gray-100'>
               <img src={manufacturingImg}  alt="missing"/>
            </div>
        </div>

        <div className='flex flex-col items-center justify-evenly sm:w-[100%] mt-20 h-60  bg-blue-200 rounded-xl hover:rounded-full 
        transition-transform delay-150' >
            <p className='font-Syne text-[1.5rem] mt-10'>Manufacturing</p>
            <p className=' font-OpenSans px-6 text-center text-black-200'>optimize your multichain manufacturing operations</p>
            
            <p className='flex justify-center items-center gap-2 text-red-600 font-semibold cursor-pointer'
            onClick={()=>navigate('/crm')}>Learn More 
            <MdArrowRightAlt  className={ isHovered3 ? 'absolute ml-[20%] sm:ml-[6%] translate-x-4 transition-transform delay-300' : 'hidden ' } />
            </p>
        </div>

        </div>
         {/* Card-4 */}
         <div className=' w-[100%] px-2 sm:px-0'
        onMouseEnter={() => setIsHovered4(true)}
        onMouseLeave={() => setIsHovered4(false)}
        >
        <div className={`absolute flex justify-center items-center  sm:ml-[4%] ml-[35%] sm:h-[19%] h-[18%] 
        sm:w-[9%] w-[30%] rounded-full bg-white ${isHovered4 ? 'scale-110' : '' } `} >
            <div className='h-[80%] w-[80%] rounded-full bg-white'>
                <img src={wareHouseImg}  alt="missing"/>
            </div>
        </div>

        <div className='flex flex-col items-center justify-evenly sm:w-[100%] mt-20 h-60  bg-red-200 rounded-xl hover:rounded-full 
        transition-transform delay-150' >
            <p className='font-Syne text-[1.5rem] mt-10'>Warehouse</p>
            <p className=' font-OpenSans px-6 text-center text-black-200'>where streamlined process unlock the dream</p>
            
            <p className='flex justify-center items-center gap-2 text-red-600 font-semibold cursor-pointer'
            onClick={()=>navigate('')}>Learn More 
            <MdArrowRightAlt  className={ isHovered4 ? 'absolute ml-[20%] sm:ml-[6%] translate-x-4 transition-transform delay-300' : 'hidden ' } />
            </p>
        </div>

        </div>
        
        

    </div>
    </div>
    </>
  )
}

export default Cards