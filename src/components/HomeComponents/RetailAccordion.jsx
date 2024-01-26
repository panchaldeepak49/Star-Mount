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

const RetailAccordion = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const renderItems = ()=>{
      if (!isMobileMenuOpen) {
        return null; // Don't render items if mobile menu is closed
    }
      return(
      <>
        <div className='relative text-xs flex flex-col gap-2 font-semibold z-50 bg-green-400 p-2'>
          <ul className="hover:text-orange-400 ml-2">About Us</ul>
          <ul className="hover:text-orange-400 ml-2">Team</ul>
          <ul className="hover:text-orange-400 ml-2 border-none">Media</ul>
          <ul className="hover:text-orange-400 ml-2">Blogs</ul>
          <ul className="hover:text-orange-400 ml-2">Distribution</ul>
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
              className="flex items-center gap-2 ml-2 md:ml-0 font-semibold "
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              
            >
              Solutions
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
        transition-transform ">
          <ul className="hover:text-orange-400 transition-transform delay-200 hover:ease-in">About Us</ul>
          <ul className="hover:text-orange-400 ">Team</ul>
          <ul className="hover:text-orange-400 border-none">Media</ul>
          <ul className="hover:text-orange-400">Blogs</ul>
          <ul className="hover:text-orange-400">Distribution</ul>
          
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