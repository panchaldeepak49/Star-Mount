import React from 'react'

import CarouselImages from '../components/HomeComponents/CarouselImages'
import Business from '../components/HomeComponents/Business'
import Services from '../components/HomeComponents/Services'
import OurTrainers from '../components/HomeComponents/OurTrainers'
import Cards from '../components/HomeComponents/Cards'


const Home = () => {

  return (
    <>
    
    <CarouselImages />
    <Business />
    <Services />
    <Cards />
    <OurTrainers />
    
    </>
  )
}

export default Home