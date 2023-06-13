import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Navbar_Strt from '../Components/Navbar_Start/Navbar_Strt'
import Soundbars_pages from '../Components/Soundbars_Pages/Soundbars_pages'

const Soundbars = () => {
  return (
    <div>
      <Navbar_Strt/>
        <Navbar/>
        <Soundbars_pages/>
        <Footer/>
    </div>
  )
}

export default Soundbars