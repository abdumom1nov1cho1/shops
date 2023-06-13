import { useState, useContext, useEffect } from "react";
import FormInput from "../Components/FormInput/FormInput";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "../Components/Register/register.css";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";
import Navbar_Strt from "../Components/Navbar_Start/Navbar_Strt";
import { GetAPIFunc, PostFunc, DeleteDataFunc } from "./../module/api";
export default function Register() {
  const {
    user,
    setUser,
    pass,
    setPass,
    userData,
    LogoutFunc,
    // number,
    // setNumber,
    name,
    setName,
  } = useContext(Context);

  const SaveUserData = () => {
    PostFunc("/userData", userData)
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    localStorage.setItem("auth", JSON.stringify(userData))
    
  };

  const CheckUserFunc = () => {
    GetAPIFunc("/userData").then((data) => {
      for (let i = 0; i < data.length; i++) {
        const element = data[i];

      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("auth", JSON.stringify(userData));
    window.location.replace("/korzinka")
  };

  return (
    <div>
      <Navbar_Strt />
      <Navbar />
        <div className="app__register">
          <form className="app__register__form" onSubmit={handleSubmit}>
            <h1 data-aos="fade-up" className="app__register__h1">
              Sign Up
            </h1>
            <input
              data-aos="fade-up-right"
              required
              className="app__register__input"
              type="text"
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              data-aos="fade-up-right"
              required
              className="app__register__input"
              type="email"
              placeholder="@gmail.com"
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              data-aos="fade-up-left"
              required
              className="app__register__input"
              type="password"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
            <button
              data-aos="fade-up"
              className="app__register__btn"
              onClick={SaveUserData}
            >
              Submit
            </button>
          </form>
        </div>
      <Footer />
    </div>
  );
}
