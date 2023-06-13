import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Navbar_Strt from '../Components/Navbar_Start/Navbar_Strt'
import MyProfile_Page from '../Components/My Profile/MyProfile_Page'

const MyProfile = () => {
  return (
    <div>
        <Navbar_Strt/>
        <Navbar/>
        <MyProfile_Page/>
        <Footer/>
    </div>
  )
}

export default MyProfile