import React from 'react'
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Chip,
    Drawer,
  } from "@material-tailwind/react";
  import { ChevronDownIcon } from "@heroicons/react/24/outline";
  import { useNavigate } from 'react-router-dom';

const RetailAccordion = () => {

    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const renderItems = ()=>{
      if (!isMobileMenuOpen) {
        return null; // Don't render items if mobile menu is closed
    }
      return(
      <>
        <div className='relative text-xs flex flex-col gap-2 font-semibold z-50 bg-green-400 p-2'>
          <ul className="hover:text-orange-400 ml-2" onClick={()=>navigate('/mobileApplication')}>Mobile Application</ul>
          <ul className="hover:text-orange-400 ml-2" onClick={()=>navigate('/webApplication')}>Web Application</ul>
          <ul className="hover:text-orange-400 ml-2 border-none" onClick={()=>navigate('/windowsApplication')}>Windows Application</ul>
          <ul className="hover:text-orange-400 ml-2" onClick={()=>navigate('/seo')}>Search Engine Optimization</ul> 
          </div>
        </>
      ) 
    }


    

  return (
    <>
    <React.Fragment>
      
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className={`text-xs  sm:ml-4 sm:text-base py-2 md:py-7  ${ isMenuOpen ? " text-orange-400" : ""} `}
            color="white"
          >
            <ListItem
              className="flex items-center gap-2 ml-2 md:ml-0  font-Syne "
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform  lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform md:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="hidden -mt-5  md:flex md:flex-col gap-4 bg-[#262220] text-white p-4 border-none
        transition-transform font-Syne">
          <ul className="hover:text-orange-400 transition-transform delay-200 hover:ease-in cursor-pointer"
          onClick={()=>navigate('/mobileApplication')}>Mobile Application</ul>
          <ul className="hover:text-orange-400 cursor-pointer" onClick={()=>navigate('/webApplication')}>Web Application</ul>
          <ul className="hover:text-orange-400 cursor-pointer" onClick={()=>navigate('/windowsApplication')}>Windows Application</ul>
          <ul className="hover:text-orange-400 cursor-pointer" onClick={()=>navigate('/seo')}>Search Engine Optimization</ul>
          
          
        </MenuList>
      </Menu>
      <div className="absolute md:hidden  w-full  !border-none">
        <Collapse open={isMobileMenuOpen}>{renderItems()}</Collapse>
      </div>
    </React.Fragment>
    </>
  )
}

export default RetailAccordion