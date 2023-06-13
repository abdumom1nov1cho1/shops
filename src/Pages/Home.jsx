import { MotionConfig } from "framer-motion";
import React from "react";
import Best from "../Components/Best__Of/Best";
import Catchem from "../Components/Catchem/Catchem";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Offers from "../Components/Offers_hub/Offers";
import Pages from "../Components/Peges_access/Pages";
import Section2 from "../Components/Section2/Section2.jsx";
import VideoSlider from "../Components/VIdeoSlider/VideoSlider";
import SmartWatch from "./SmartWatch";
import { motion } from "framer-motion"
import Map from "../Components/Map";
import Navbar_Strt from "../Components/Navbar_Start/Navbar_Strt";
const Home = () => {
  return (
    <motion.div
    animate={{opacity: 1 }}
    initial={{opacity: 1 }}
    exit={{opacity: 0 }}
    transition={{ duration: 0.3 }}
    >
      <Navbar_Strt/>
      <Navbar />
      <Header />
      <Offers/>
      <Pages/>
      <Best/>
      <SmartWatch/>
      <Section2 />
      <Catchem/>
      <Map/>
      <Footer />
    </motion.div>
  );
};

export default Home;
