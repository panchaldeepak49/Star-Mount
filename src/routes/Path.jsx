import React from 'react'
import { Routes,Route } from "react-router-dom"
import Navbar from '../components/GlobalComponents/Navbar'
import Home from '../pages/Home'
import Footer from '../components/GlobalComponents/Footer'
import OurServices from '../pages/OurServices'
import Benefits from '../pages/Benefits'
import DMS from '../pages/DMS'
import Erp from '../pages/Erp'
import Crm from '../pages/Crm'
import MobileApplication from '../pages/MobileApplication'
import WebApplication from '../pages/WebApplication'
import WindowsApplication from '../pages/WindowsApplication'
import SEO from '../pages/SEO'

const Path = () => {
  return (
    <>
    <Navbar />

     <Routes>
        <Route path='/' element={<Home />}></Route> 
        <Route path='/ourServices' element={<OurServices />}></Route> 
        <Route path='/benefits' element={<Benefits />}></Route> 
        <Route path='/dms' element={<DMS />}></Route> 
        <Route path='/erp' element={<Erp />}></Route> 
        <Route path='/crm' element={<Crm />}></Route> 
        <Route path='/mobileApplication' element={<MobileApplication />}></Route>
        <Route path='/webApplication' element={<WebApplication />}></Route>
        <Route path='/windowsApplication' element={<WindowsApplication />}></Route>
        <Route path='/seo' element={<SEO />}></Route>
     </Routes>

     <Footer />
    </>
  )
}

export default Path