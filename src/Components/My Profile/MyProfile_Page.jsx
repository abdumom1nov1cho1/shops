import "../My Profile/MyProfile_Page.css";
import React, { useContext } from "react";
import { Context } from "../../Context";
import { Link } from "react-router-dom";
const MyProfile = () => {
  const userCheck = JSON.parse(localStorage.getItem("auth"));
  if (userCheck) {
  } else {
    window.location.replace("/register");
  }
  return (
    <div className="container">
      <div className="profile">
        <div className="profile_left">
          <img
            src="https://www.benjamindada.com/content/images/dadabenblog/2020/02/687474703a2f2f75702e736f6669616e6568616d6c616f75692e6d652f6c6f636b646f6f722f6c6f676f732f6c6f676f323035783235302e676966.gif"
            alt=""
          />
        </div>
        <div className="profile_right">
          <h1 className="profile_right_h1">YOUR REGISTER</h1>
          <div className="profile__right">
            <div className="profile_right_left">
              <h1 className="profile_right__h1">Your Name:</h1>
              <hr />
              <h1 className="profile_right__h1">Your gm@il:</h1>
            </div>
            <div className="profile_right_right">
              <h1 className="profile_right__h11">{userCheck.name}</h1>
              <h1 className="profile_right__h11"> {userCheck.number}</h1>
              <h1 className="profile_right__h11">{userCheck.login}</h1>
            </div>
          </div>
          <Link to="/register">
            <button className="profile__btn">
              Change
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
