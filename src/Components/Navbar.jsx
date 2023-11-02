import React, { useState } from "react";
import logo from "./img/logoPrepBytes.svg";
import { NavLink, useNavigate } from "react-router-dom";
// import One from "./One";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Drop.css";
import "./Navbar2.css";
import LogPro from "./RjLog/LogPro";

const Navbar = () => {
  const [show, setShow] = useState(localStorage.getItem("loggedIn"))

  const [click, setClick] = useState(false);
  const navi = useNavigate();

  console.log(click);
  const handleClick = () => {
    setClick(!click);
  };

  const handleLogout = ()=>{
    localStorage.clear();
    setShow(!show)
}

  return (
    <section className="MainNavbar">
      <section className="dopListing">
        <div className="log" onClick={() => navi("/")}>
          <img src={logo} alt="/" />
        </div>
        <section id="myLInks">
          <section className={click ? "nav-menu active" : "nav-menu"}>
            <div className="Extra nav-item">
              <NavLink
                exact
                to="/mocktest"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Mock Test
              </NavLink>
              <NavLink
                exact
                to="/videotutorial"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Video Tutorials
              </NavLink>
              <NavLink
                exact
                to="/mocktest"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Master Competitive Programming
              </NavLink>
              <NavLink
                exact
                to="/videotutorial"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Full Stack Program
              </NavLink>
              <NavLink
                exact
                to="/videotutorial"
                className="nav-links"
                activeClassName="active"
                onClick={handleClick}
              >
                Elevation Acadmy
              </NavLink>
              <NavLink
                exact
                to="/dashboard"
                className="nav-links"
                onClick={handleClick}
              >
                Dashboard
              </NavLink>
              <NavLink
                exact
                to="/login"
                className="nav-links"
                onClick={handleLogout}
              >
                Logout
              </NavLink>
            </div>

            {/* Thi this are shown  */}

            <div className="dropdown">
              <label>Study Material</label>
              <i class="fa fa-caret-down"></i>
              <div className="dropdown-content">
                <div className="nav-item">
                  <NavLink
                    exact
                    to="/mocktest"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Mock Test
                  </NavLink>
                </div>

                <div className="nav-item">
                  <NavLink
                    exact
                    to="/videotutorial"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Video Tutorials
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="dropdown">
              <label>Cource and Programs</label>
              <i class="fa fa-caret-down"></i>
              <div className="dropdown-content">
                <div className="nav-item">
                  <NavLink
                    exact
                    to="/master-compitative-programing"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Master Competitive Programming
                  </NavLink>
                </div>

                <div className="nav-item">
                  <NavLink
                    exact
                    to="/videotutorial"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Full Stack Program
                  </NavLink>
                </div>
              </div>
            </div>

            <section className="nav-item">
              <NavLink
                exact
                to="/videotutorial"
                className="meet"
                activeClassName="active"
                onClick={handleClick}
              >
                Elevation Acadmy
              </NavLink>
            </section>

            <div className="dropdown">
              <label>Project</label>
              <i class="fa fa-caret-down"></i>
              <div className="dropdown-content">
                <div className="nav-item">
                  <NavLink
                    exact
                    to="/html"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    HTML
                  </NavLink>
                </div>

                <div className="nav-item">
                  <NavLink
                    exact
                    to="/css"
                    activeClassName="active"
                    className="nav-item"
                    onClick={handleClick}
                  >
                    CSS
                  </NavLink>
                </div>
                <div className="nav-item">
                  <NavLink
                    exact
                    to="/js"
                    activeClassName="active"
                    className="nav-NavLinks"
                    onClick={handleClick}
                  >
                    JavaScript
                  </NavLink>
                </div>
                <div className="nav-item">
                  <NavLink
                    exact
                    to="/react"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    React JS
                  </NavLink>
                </div>
                <div className="nav-item">
                  <NavLink
                    exact
                    to="/node"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Node JS
                  </NavLink>
                </div>
                <div className="nav-item">
                  <NavLink
                    exact
                    to="/mern"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    MERN
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <LogPro />
            </div>
          </section>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Navbar;
