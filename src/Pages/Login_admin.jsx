import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Components/Register/Login.css";
const Login_admin = () => {
  // password
  const [password, setPassword] = useState("");
  // password
  return (
    <div>
      <section className="container">
        <div className="admin__sect">
          <div className="section6__otadiv">
            <div className="section6__otadiv__text">
              <h1 className="section6__otadiv__text__h1">ENTER YOUR PASSWORD</h1>{" "}
              <br />
              <p className="section6__otadiv__text__p">
                Get our daily updates by subscribing to our newspaper, please
                drop your password below
              </p>
            </div>
            <br />
            <div className="section6__otadiv__input">
              <input
                className="section6__otadiv__input1"
                type="text"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
             
            </div>

            {password === "5555" ? (
              <button className="section6__otadiv__input__btn1">
                <Link to="/admin1">
                  <i
                    className="fa-solid fa-check"
                    style={{ color: "#FFFEF3" }}
                  ></i>
                </Link>
              </button>
            ) : (
              <button className="section6__otadiv__input__btn2">
                <i
                  className="fa-solid fa-xmark"
                  style={{ color: "#FFFEF3" }}
                ></i>
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login_admin;
