import React from 'react'
import Charger_Pages from '../Components/Charger_Pages/Charger_Pages'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Navbar_Strt from '../Components/Navbar_Start/Navbar_Strt'

const Charger = () => {
  return (
    <div>
      <Navbar_Strt/>
        <Navbar/>
        <Charger_Pages/>
        <Footer/>
    </div>
  )
}

export default Charger