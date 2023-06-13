import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Navbar_Strt from '../Components/Navbar_Start/Navbar_Strt'
import Trimmer_Pages from '../Components/Trimmers_Pages/Trimmer_Pages'

const Trimmer = () => {
  return (
    <div>
      <Navbar_Strt/>
        <Navbar/>
        <Trimmer_Pages/>
        <Footer/>
    </div>
  )
}

export default Trimmer