import React from 'react'
import Home from './Components/Home/Home'
import Services from './Components/MyServices/Services'
import WhyUs from './Components/WhyUs/WhyUs'
import Navbar from './Components/Navbar/Navbar'
import AboutUs from './Components/AboutUs/AboutUs'
import Testomonials from './Components/Testomonials/Testomonials'
import Contact from './Components/ContactUs/Contact'
import Footer from './Components/Footer/Footer'
import LogoSlider from './Components/OurPartners/LogoSlider'

import './App.css'

function New() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <AboutUs/>
      <WhyUs/>
      <LogoSlider/>
      <Testomonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default New