import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import sittingBoy from "../img/register-img.webp";
import logo from "../img/logo.webp";

// for shortpage
import std from "../img/students.webp";
import clg from "../img/college.webp";
import ler from "../img/learning.webp";
import social from "../img/social.webp";
import Navbar from "../Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState(null);
  const navi = useNavigate();

  const EmailHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const PasswordHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const loginUser = async (userData) => {
    const api = "https://prepbytesserverbackend.onrender.com/user/log";
    const response = await axios.post(api, userData);
    setResponseData(response.data);

    console.log(response.data);

    if (response.data.token) {
      console.log(responseData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("name", response.data.userData.name);
      localStorage.setItem("userId", response.data.userData._id);

      navi("/");
    } else {
      window.alert("invalid Credential");
      navi("/register");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    setEmail("");
    setPassword("");
    loginUser(userData);
  };

  return (
    <section>
      <Navbar />
      <div className="Register">
        <section className="Register-Container">
          <div className="Register-Container-left">
            <div className="Register-imge">
              <img src={sittingBoy} alt="/" />
            </div>
            <div className="inforbox">
              <img src={logo} alt="/" className="imgge" />
              <div className="Achivers">
                <img src={std} alt="/" />
                <div>
                  <p className="count">10K+</p>
                  <p className="title">Students Entrolled</p>
                </div>
              </div>
              <div className="Achivers">
                <img src={clg} alt="/" />
                <div>
                  <p className="count">1000+</p>
                  <p className="title">Reach in Colleges</p>
                </div>
              </div>
              <div className="Achivers">
                <img src={ler} alt="/" />
                <div>
                  <p className="count">10K+</p>
                  <p className="title">Hours of Learning</p>
                </div>
              </div>
              <div className="Achivers">
                <img src={social} alt="/" />
                <div>
                  <p className="count">150K+</p>
                  <p className="title">Social Community</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Register-container-right">
            <div className="Register-top">
              <div className="Register-container-link">
                <div className="linkOne">
                  <NavLink
                    to="/register"
                    style={({ isActive }) => ({
                      color: isActive ? "#4b8ce8" : "#6b6f70",
                    })}
                    className="one"
                  >
                    SIGNUP
                  </NavLink>
                </div>
                <div className="linkTwo">
                  <NavLink
                    to="/login"
                    style={({ isActive }) => ({
                      color: isActive ? "#4b8ce8" : "#6b6f70",
                    })}
                    className="one"
                  >
                    LOGIN
                  </NavLink>
                </div>
              </div>
            </div>
            <section className="Register-form">
              <div className="form-cont-title">
                <h1 className="form-title">Create your New Account</h1>
              </div>
              <section className="form-container">
                <form>
                  <div className="inputbox">
                    <div className="input-div">
                      {/* Email */}
                      <input
                        type="email"
                        name="user-email"
                        required="required"
                        autoComplete="email"
                        autoCorrect="email"
                        value={email}
                        onChange={EmailHandler}
                        placeholder="Email"
                      />
                    </div>

                    <div className="input-div">
                      {/* password */}
                      <input
                        type="password"
                        name="user-password"
                        required="required"
                        autoComplete="password"
                        autoCorrect="password"
                        value={password}
                        onChange={PasswordHandler}
                        placeholder="Password"
                      />
                    </div>
                    <button
                      className="submiting"
                      type="submit"
                      value="submit"
                      onClick={submitHandler}
                    >
                      sign up
                    </button>
                  </div>
                </form>
              </section>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Login;
