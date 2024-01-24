import React,{ useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import {RxCross2} from "react-icons/rx";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
  } from "@heroicons/react/24/outline";
import RetailAccordion from '../HomeComponents/RetailAccordion';
import DistributionAccordion from '../HomeComponents/DistributionAccordion';
import logoImg from "/Images/logo.png"
import GetStartedAccordion from '../HomeComponents/GetStartedAccordion';


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
}
  return (
    <>
   
     <div className=' w-full h-20 bg-[#002B46] flex justify-between items-center'>
        <img src={logoImg} className='md:h-19 sm:h-16 h-12 sm:ml-20 ml-5'></img>

        <nav>
        <span className='text-3xl max-[400px]:text-2xl sm:hidden block cursor-pointer ml-20 mr-4 mt-60' onClick={toggleMenu}>
        {isMenuOpen ? <RxCross2 /> : <AiOutlineMenu />}
        </span>
        
    <ul className={` md:flex md:items-center md:justify-between relative  md:mr-0  z-50  md:static md:mt-0 sm:mt-96  md:h-20 h-auto md:w-auto 
                    left-0 md:py-0 py-4 md:pl-0 sm:opacity-100 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}  transition-all ease-in duration-500`}>
          <RetailAccordion />
          <DistributionAccordion />
          
          <li className='flex items-center md:mx-2 md:py-8 py-2 px-2  font-semibold text-white sm:text-base text-xs hover:text-orange-500'>
              <a href='#'>Partners</a> 
          </li>

          <li className='flex items-center md:mx-2 md:py-8 py-2 px-2  font-semibold text-white sm:text-base text-xs hover:text-orange-500'>
              <a href='#'>Career</a> 
          </li>

          <li className='flex items-center md:mx-2 md:py-8 py-2 px-2  font-semibold text-white sm:text-base text-xs hover:text-orange-500'>
              <a href='#'>Contact Us</a> 
          </li>

          <GetStartedAccordion />
        </ul>

    </nav>

      </div>              

      
    </>
  )
}

export default Navbar