import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
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

const DistributionAccordion = ({setIsMainMenuOpen,isProductMobileMenuOpen,setIsProductMobileMenuOpen,
  setIsServiceMobileMenuOpen,setIsGetMobileMenuOpen }) => {

  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  useEffect(() => {
    if (isProductMobileMenuOpen) {
        setIsServiceMobileMenuOpen(false);
        setIsGetMobileMenuOpen(false);
    }
}, [isProductMobileMenuOpen]);


  const closeAllMenus = () =>{
    setIsMenuOpen(false);
    setIsProductMobileMenuOpen(false);
    setIsMainMenuOpen(false);
  }

  const renderItems = ()=>{
    if (!isProductMobileMenuOpen) {
      return null; // Don't render items if mobile menu is closed
  }
    return(
    <>
      <div className='relative text-xs flex flex-col gap-2 font-semibold z-50 bg-green-400 p-2'>
        {/* <ul className="hover:text-orange-400 ml-2" onClick={()=>navigate('/ourServices')}>OurServices</ul> */}
        <ul className="hover:text-orange-400 ml-2" onClick={()=>{navigate('/erp'); closeAllMenus();}}>ERP</ul>
        <ul className="hover:text-orange-400 ml-2 border-none" onClick={()=>{navigate('/dms');closeAllMenus();}}>DMS</ul>
        <ul className="hover:text-orange-400 ml-2" onClick={()=>{navigate('/crm');closeAllMenus();}}>CRM</ul>
        <ul className="hover:text-orange-400 ml-2" onClick={()=>{navigate('/warehouse');closeAllMenus();}} >Warehouse</ul>
        <ul className="hover:text-orange-400 ml-2" onClick={()=>{navigate('/project');closeAllMenus();}} >Project Management</ul>
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
            className={`text-xs sm:ml-4 sm:text-base py-2 md:py-7  ${ isMenuOpen ? " text-orange-400" : ""} `}
            color="white"
          >
            <ListItem
              className="flex items-center gap-2 ml-2 md:ml-0 font-Syne "
              selected={isMenuOpen || isProductMobileMenuOpen}
              onClick={() => setIsProductMobileMenuOpen((cur) => !cur)}
            >
             Products
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform  lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform md:hidden ${
                  isProductMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="hidden -mt-5  md:flex md:flex-col gap-2 bg-[#262220] text-white p-4 border-none
        transition-transform delay-200 font-Syne text-base ">
          {/* <ul className="hover:text-orange-400  cursor-pointer"
          onClick={()=>navigate('/ourServices')}> Our Services</ul> */}
          <ul className="hover:text-orange-400 cursor-pointer" onClick={()=>navigate('/erp')}>SMT ERP for Manufacturing</ul>
          <ul className="hover:text-orange-400 cursor-pointer" onClick={()=>navigate('/dms')}> SMT DMS</ul>
          <ul className="hover:text-orange-400 cursor-pointer" onClick={()=>navigate('/crm')}> SMT CRM</ul>
          {/* <ul className="hover:text-orange-400 cursor-pointer" onClick={()=>navigate('/benefits')}>Benefits</ul> */}
          <ul className="hover:text-orange-400 cursor-pointer" onClick={()=>navigate('/warehouse')}> SMT Warehouse Management</ul>
          <ul className="hover:text-orange-400 cursor-pointer" onClick={()=>navigate('/project')}> SMT Project Management</ul>
          {/* <ul className="hover:text-orange-400"> Customized ERP for All Industries</ul> */}
        </MenuList>
      </Menu>
      <div className="absolute md:hidden w-full  !border-none">
        <Collapse open={isProductMobileMenuOpen}>{renderItems()}</Collapse>
      </div>
    </React.Fragment>
    </>
  )
}

export default DistributionAccordion