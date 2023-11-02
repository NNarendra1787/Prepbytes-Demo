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

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");

  const [responseData, setresponseData] = useState(null);
  const navi = useNavigate();

  // for name
  const HandleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  //for email
  const HandleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  //for phonenumber
  const HandlePhone = (event) => {
    event.preventDefault();
    setPhone(event.target.value);
  };

  //for password
  const HandlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  //for college
  const HandleCollege = (event) => {
    event.preventDefault();
    setCollege(event.target.value);
  };
  //for passing year
  const HandleYear = (event) => {
    event.preventDefault();
    setYear(event.target.value);
  };

  const RegisterUser = async (clientData) => {
    const url = "https://prepbytesserverbackend.onrender.com/user/reg";
    const response = await axios.post(url, clientData);
    setresponseData(response.data);

    console.log(response.data);

    if (response.data.token) {
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("phone", response.data.phone);
      localStorage.setItem("college", response.data.college);
      localStorage.setItem("year", response.data.year);

      navi("/");
      console.log(responseData);
    } else {
      window.alert("alrady register");
      navi("/login");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const clientData = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      college: college,
      year: year,
    };
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setCollege("");
    setYear("");
    RegisterUser(clientData);
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
                      {/* Name */}
                      <input
                        type="text"
                        name="name"
                        required="required"
                        autoComplete="name"
                        autoCorrect="name"
                        value={name}
                        onChange={HandleName}
                        placeholder="Name"
                      />
                    </div>
                    <div className="input-div">
                      {/* Email */}
                      <input
                        type="email"
                        name="email"
                        required="required"
                        autoComplete="email"
                        autoCorrect="email"
                        value={email}
                        onChange={HandleEmail}
                        placeholder="Email"
                      />
                    </div>
                    <div className="input-div">
                      {/* Phone */}
                      <input
                        type="number"
                        name="phone"
                        required="required"
                        autoComplete="phone"
                        autoCorrect="phone"
                        value={phone}
                        onChange={HandlePhone}
                        placeholder="Phone no."
                      />
                    </div>
                    <div className="input-div">
                      {/* password */}
                      <input
                        type="password"
                        name="password"
                        required="required"
                        autoComplete="password"
                        autoCorrect="password"
                        value={password}
                        onChange={HandlePassword}
                        placeholder="Password"
                      />
                    </div>
                    <div className="coll-year input-div">
                      <div className="colleage">
                        {/* college */}
                        <input
                          type="text"
                          name="college"
                          required="required"
                          autoComplete="college"
                          autoCorrect="college"
                          value={college}
                          onChange={HandleCollege}
                          placeholder="College"
                        />
                      </div>
                      {/* year */}
                      {/* <input
                      type="number"
                      name="year"
                      required="required"
                      autoComplete="year"
                      autoCorrect="year"
                      value={year}
                      onChange={HandleYear}
                      placeholder="Year"
                    /> */}
                      <select
                        name="year"
                        required="required"
                        autoComplete="year"
                        autoCorrect="year"
                        value={year}
                        onChange={HandleYear}
                        placeholder="Year"
                      >
                        <option value="2012">Year</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                      </select>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" name="agg" id="agg" />
                      <label for="agg">
                        I agree to the <span>Teams and Condition</span>
                      </label>
                    </div>

                    <button
                      className="submiting"
                      type="submit"
                      value="submit"
                      onClick={handleSubmit}
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
}

export default Register;
