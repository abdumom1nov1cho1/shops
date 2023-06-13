import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Airdopes_pages from "../Components/Airdopes_Pages/Airdopes_pages"
import Navbar_Strt from "../Components/Navbar_Start/Navbar_Strt";

const Airdopes = () => {
  return (
    <div>
      <Navbar_Strt/>
      <Navbar />
      <Airdopes_pages />
      <Footer />
    </div>
  );
};

export default Airdopes;
