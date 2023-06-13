import React from "react";
import About_header from "../Components/About_header/About_header";
import Footer from "../Components/Footer/Footer";
import Map from "../Components/Map";
import Navbar from "../Components/Navbar/Navbar";
import Navbar_Strt from "../Components/Navbar_Start/Navbar_Strt";
import Offers from "../Components/Offers_hub/Offers";

const About = () => {
  return (
    <div>
      <Navbar_Strt />
      <Navbar />
      <About_header />
      <Map/>
      <Offers />
      <Footer />
    </div>
  );
};

export default About;
