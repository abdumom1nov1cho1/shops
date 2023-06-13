import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Navbar_Strt from '../Components/Navbar_Start/Navbar_Strt'
import Nescbanda_Pages from '../Components/Nescbands_Pages/Nescbanda_Pages'

const Nescbands = () => {
  return (
    <div>
      <Navbar_Strt/>
        <Navbar/>
        <Nescbanda_Pages/>
        <Footer/>
    </div>
  )
}

export default Nescbands