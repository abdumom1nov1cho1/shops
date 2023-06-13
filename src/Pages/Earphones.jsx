import React from 'react'
import Earphones_Pages from '../Components/Earphones_Pages/Earphones_Pages'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Navbar_Strt from '../Components/Navbar_Start/Navbar_Strt'

const Earphones = () => {
  return (
    <div>
      <Navbar_Strt/>
        <Navbar/>
        <Earphones_Pages/>
        <Footer/>
    </div>
  )
}

export default Earphones