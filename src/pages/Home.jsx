import React from 'react'
import Navbar from '../components/GlobalComponents/Navbar'
import CarouselImages from '../components/HomeComponents/CarouselImages'
import Business from '../components/HomeComponents/Business'
import Footer from '../components/GlobalComponents/Footer'
import OurTrainers from '../components/HomeComponents/OurTrainers'


const Home = () => {

  return (
    <>
    <Navbar />
    <CarouselImages />
    <Business />
    <OurTrainers />
    <Footer />
    </>
  )
}

export default Home