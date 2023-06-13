import React from 'react'
import CarAccessories_Pages from '../Components/CarAccessories_Pages.jsx/CarAccessories_Pages'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Navbar_Strt from '../Components/Navbar_Start/Navbar_Strt'

const Accessories = () => {
  return (
    <div>
      <Navbar_Strt/>
        <Navbar/>
        <CarAccessories_Pages/>
        <Footer/>
    </div>
  )
}

export default Accessories