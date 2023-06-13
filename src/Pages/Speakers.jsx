import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Navbar_Strt from '../Components/Navbar_Start/Navbar_Strt'
import Speakers_Pages from '../Components/Speakers_Pages/Speakers_Pages'

const Speakers = () => {
  return (
    <div>
      <Navbar_Strt/>
        <Navbar/>
        <Speakers_Pages/>
        <Footer/>
    </div>
  )
}

export default Speakers