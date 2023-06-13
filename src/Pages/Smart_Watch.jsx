import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Navbar_Strt from '../Components/Navbar_Start/Navbar_Strt'
import SmartWatch_Pages from '../Components/SmartWatch__Pages/SmartWatch_Pages'

const Smart_Watch = () => {
  return (
    <div>
      <Navbar_Strt/>
        <Navbar/>
        <SmartWatch_Pages/>
        <Footer/>
    </div>
  )
}

export default Smart_Watch