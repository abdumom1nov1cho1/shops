import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Navbar_Strt from '../Components/Navbar_Start/Navbar_Strt'
import View_Page from '../Components/View_Page/View_Page'

const View_All = () => {
  return (
    <div>
      <Navbar_Strt/>
        <Navbar/>
        <View_Page/>
        <Footer/>
    </div>
  )
}

export default View_All