import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Navbar_Strt from '../Components/Navbar_Start/Navbar_Strt'
import PowerBank_Pages from '../Components/PowerBank_Pages/PowerBank_Pages'

const Cables = () => {
  return (
    <div>
      <Navbar_Strt/>
        <Navbar/>
        <PowerBank_Pages/>
        <Footer/>
    </div>
  )
}

export default Cables