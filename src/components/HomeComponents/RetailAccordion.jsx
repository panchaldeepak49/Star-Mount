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
            className={`text-xs ml-4 sm:text-base py-2 md:py-7  ${ isMenuOpen ? " text-orange-400" : ""} `}
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

        <MenuList className=" -mt-5  flex flex-col gap-4 bg-[#262220] text-white p-4 border-none">
          <ul className="hover:text-orange-400 transition-transform delay-200 hover:ease-in">Food & Beverages</ul>
          <ul className="hover:text-orange-400 ">Hotels</ul>
          <ul className="hover:text-orange-400 border-none">Manufacturing</ul>
          <ul className="hover:text-orange-400">Retail</ul>
          <ul className="hover:text-orange-400">Distribution</ul>
        </MenuList>
      </Menu>
      <div className="absolute md:hidden bg-red-400  !border-none">
        <Collapse open={isMobileMenuOpen}></Collapse>
      </div>
    </React.Fragment>
    </>
  )
}

export default RetailAccordion