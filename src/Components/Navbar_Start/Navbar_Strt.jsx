import { Context } from "../../Context";
import React, { useContext } from "react";
import { useCart } from "react-use-cart";
import { NavLink, Link } from "react-router-dom";
import "../Navbar_Start/Navbar.css";
import Logo from "../../Logos/TrailFX.png"

const Navbar_Strt = () => {
  const { logoutClasses, LogoutFunc } = useContext(Context);
  LogoutFunc();
  const Logout = () => {
    localStorage.removeItem("auth");
    LogoutFunc();
    window.location.replace("/register");
  };

  const navRightFunc = () => {
    return (
      <React.Fragment>
        <div className="nav1__right" data-aos="fade-left">
          <Link to="" className="btnn" onClick={Logout}>
            Sign Up
          </Link>
          <Link to="/signin" className="btnn">
            Sign In
          </Link>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="nav1">
      <div className="nav1__left">
        <img
          className="nav1__left__img"
          data-aos="fade-right"
          style={{ width: "150px" }}
          src={Logo}
          alt=""
        />
        <p data-aos="fade-right" className="nav1__left__p">
          Add vibe to your party with Aavante Bar 590 & its 25W RMS Stereo
          Sound. OUT NOW @ ₹1,999! Shop Now.
        </p>
      </div>
      {
        JSON.parse(localStorage.getItem("auth")) ? "" : navRightFunc()
      }
    </div>
  );
};

export default Navbar_Strt;
