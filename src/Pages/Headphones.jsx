import React from 'react'
import Footer from '../Components/Footer/Footer'
import Headphones_Pages from '../Components/Headphones_Pages/Headphones_Pages'
import Navbar from '../Components/Navbar/Navbar'
import Navbar_Strt from '../Components/Navbar_Start/Navbar_Strt'

const Headphones = () => {
  return (
    <div>
      <Navbar_Strt/>
        <Navbar/>
        <Headphones_Pages/>
        <Footer/>
    </div>
  )
}

export default Headphones