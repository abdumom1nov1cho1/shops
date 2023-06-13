import React from "react";
import { Link } from "react-router-dom";
import SmartWatch from "../../Pages/SmartWatch";
import "../About_header/About_header.scss";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
const About_header = () => {
  return (
    <AnimatePresence mode="wait">
      {" "}
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="container"
      >
        <img
          className="dd"
          src="https://9to5mac.com/wp-content/uploads/sites/6/2021/11/airpods-max-apple-watch-series-7.jpg?quality=82&strip=all"
          alt=""
          data-aos='fade-up'
        />
      </motion.div>
      <SmartWatch />
      <div className="container">
        <div className="header_pages_1">
          <Link className="header_pages" to="/headphones" data-aos='fade-right'>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/3_2_49a473e6-deab-422f-8879-7c37f7784837_800x.png?v=1672820804"
              alt=""
            />
          </Link>
          <Link className="header_pages" to="/headphones" data-aos='fade-left'>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/d4_29ded928-19cb-4c2b-81ee-9bc90cad63b1_800x.png?v=1672145579"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="header__img">
          <div className="header__texts"data-aos='fade-right'>
            <h1 className="header__texts__h1"data-aos='fade-right'>Few won't show.</h1>
            <p className="header__texts__p">
              Powerful features that make it even easier to stay active, stay{" "}
              <br />
              healthy, stay connected and feel safe. Advanced sensors that track{" "}
              <br />
              all types of physical activity and your favorite workouts. TrailFX{" "}
              <br />
              Watch SE is a watch with which you appreciate every second.
            </p>
            <button className="header__btn">Learn More</button>
          </div>
          <img data-aos='fade-left'
            className="header__img__2"
            src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/Health/ios15-iphone13-pro-watchos8-series7-take-ecg-animation.gif"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <div className="header_pages_1">
          <Link className="header_pages" data-aos='fade-right' to="/smartwatch">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/d1_bf996ce2-88c9-42a5-b229-17ad067697ed_800x.png?v=1672145579"
              alt=""
            />
          </Link>
          <Link className="header_pages" to="/airdopes"data-aos='fade-left'>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/d2_7e3f6fa9-1546-455e-9c4b-695dcc9ba134_800x.png?v=1672145579"
              alt=""
            />
          </Link>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default About_header;
