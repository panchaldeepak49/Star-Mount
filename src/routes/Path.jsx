import React from 'react'
import { Routes,Route } from "react-router-dom"
import Navbar from '../components/GlobalComponents/Navbar'
import Home from '../pages/Home'
import Footer from '../components/GlobalComponents/Footer'
import OurServices from '../pages/OurServices'
import Benefits from '../pages/Benefits'
import DMS from '../pages/DMS'
import Erp from '../pages/Erp'

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
     </Routes>

     <Footer />
    </>
  )
}

export default Path