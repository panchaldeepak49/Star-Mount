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
import ContactForm from './ContactForm';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isProductMobileMenuOpen, setIsProductMobileMenuOpen] = React.useState(false);
  const [isServiceMobileMenuOpen, setIsServiceMobileMenuOpen] = React.useState(false);
  const [isGetMobileMenuOpen, setIsGetMobileMenuOpen] = React.useState(false);
  const [showModal,setShowModal] = useState(false);      //for Contact form

  function toggleMenu() {
    setIsMainMenuOpen(!isMainMenuOpen);
   }

  return (
    <>
   
     <div className=' w-full h-20 bg-[#002B46] flex justify-between items-center'>
        <img src={logoImg} className='md:h-19 sm:h-16 h-12 sm:ml-20 ml-5 cursor-pointer' 
        onClick={()=>navigate('/')}></img>

        <nav>
        <span className='text-3xl max-[400px]:text-2xl sm:hidden block cursor-pointer ml-20 mr-4 mt-60' onClick={toggleMenu}>
        {isMainMenuOpen ? <RxCross2 /> : <AiOutlineMenu />}
        </span>
        
    <ul className={` md:flex md:items-center md:justify-between relative  md:mr-0  z-50  md:static md:mt-0 bg-[#002B46] sm:mt-96  md:h-20 h-auto md:w-auto 
                    left-0 md:py-0 py-4 md:pl-0 sm:opacity-100 ${isMainMenuOpen ? 'opacity-100' : 'opacity-0'}  transition-all ease-in duration-500`}>
          
          <li className='flex items-center md:mx-2 md:py-8 py-2 px-2 font-Syne text-white sm:text-base text-xs hover:text-orange-500 transition-0.4s'>
              {/* <a href='/'>Home</a>  */}
          </li>
          
          <DistributionAccordion  setIsMainMenuOpen={setIsMainMenuOpen} isProductMobileMenuOpen={isProductMobileMenuOpen} 
          setIsProductMobileMenuOpen={setIsProductMobileMenuOpen} setIsServiceMobileMenuOpen={setIsServiceMobileMenuOpen}
          setIsGetMobileMenuOpen={setIsGetMobileMenuOpen} />

          <RetailAccordion  setIsMainMenuOpen={setIsMainMenuOpen} isServiceMobileMenuOpen={isServiceMobileMenuOpen}
          setIsServiceMobileMenuOpen={setIsServiceMobileMenuOpen} setIsGetMobileMenuOpen={setIsGetMobileMenuOpen}/>
          
          

          <li className='flex items-center md:mx-2 md:py-8 py-2 px-2 font-Syne text-white sm:text-base text-xs hover:text-orange-500'>
              <a href='#'>Career</a> 
          </li>

          <li className='flex items-center md:mx-2 md:py-8 py-2 px-2 font-Syne text-white sm:text-base text-xs hover:text-orange-500'>
              <a href='#' onClick={()=>{setShowModal(true),setIsMainMenuOpen(false)}}>Contact Us</a> 
          </li>

          <GetStartedAccordion isGetMobileMenuOpen={isGetMobileMenuOpen} setIsGetMobileMenuOpen={setIsGetMobileMenuOpen}/>
        </ul> 
        
       </nav>
       <ContactForm  showModal={showModal} setShowModal={setShowModal}/>
      </div>       
      
             
      
    </>
  )
}

export default Navbar