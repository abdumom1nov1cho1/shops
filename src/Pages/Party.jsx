import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Navbar_Strt from '../Components/Navbar_Start/Navbar_Strt'
import PartySpeakers from '../Components/PartySpeakers_Pages/PartySpeakers'

const Party = () => {
  return (
    <div>
      <Navbar_Strt/>
        <Navbar/>
        <PartySpeakers/>
        <Footer/>
    </div>
  )
}

export default Party