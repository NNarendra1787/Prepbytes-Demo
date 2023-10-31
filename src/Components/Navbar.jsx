import React, { useState } from "react";
import logo from "./img/logoPrepBytes.svg";
import { NavLink, useNavigate } from "react-router-dom";
// import One from "./One";
import "./Drop.css";
import LogPro from "./RjLog/LogPro";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const navi = useNavigate();

  console.log(click);
  const handleClick = () => {
    setClick(true);
  };
  return (
    <section className="MainNavbar">
      <section className="dopListing">
        <div className="log" onClick={() => navi("/")}>
          <img src={logo} alt="/" />
        </div>
        <section className="myLInks">
          <section>
            <div className="dropdown">
              <label>Study Material</label>
              <i class="fa fa-caret-down"></i>
              <div className="dropdown-content">
                <div>
                  <NavLink
                    exact
                    to="/mocktest"
                    // activeClassName="active"
                    className="nav-NavLinks"
                    onClick={handleClick}
                  >
                    Mock Test
                  </NavLink>
                </div>

                <div>
                  <NavLink
                    exact
                    to="/videotutorial"
                    // activeClassName="active"
                    className="nav-NavLinks"
                    onClick={handleClick}
                  >
                    Video Tutorials
                  </NavLink>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="dropdown">
              <label>Cource and Programs</label>
              <i class="fa fa-caret-down"></i>
              <div className="dropdown-content">
                <div>
                  <NavLink
                    exact
                    to="/mocktest"
                    // activeClassName="active"
                    className="nav-NavLinks"
                    onClick={handleClick}
                  >
                    Master Competitive Programming
                  </NavLink>
                </div>

                <div>
                  <NavLink
                    exact
                    to="/videotutorial"
                    // activeClassName="active"
                    className="nav-NavLinks"
                    onClick={handleClick}
                  >
                    Full Stack Program
                  </NavLink>
                </div>
              </div>
            </div>
          </section>
          <section>
            <NavLink exact to="/videotutorial" className="nav-NavLinks">
              Elevation Acadmy
            </NavLink>
          </section>
          <section>
            <div className="dropdown">
              <label>Project</label>
              <i class="fa fa-caret-down"></i>
              <div className="dropdown-content">
                <div>
                  <NavLink
                    exact
                    to="/mocktest"
                    // activeClassName="active"
                    className="nav-NavLinks"
                    onClick={handleClick}
                  >
                    HTML
                  </NavLink>
                </div>

                <div>
                  <NavLink
                    exact
                    to="/videotutorial"
                    // activeClassName="active"
                    className="nav-NavLinks"
                    onClick={handleClick}
                  >
                    CSS
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    exact
                    to="/videotutorial"
                    // activeClassName="active"
                    className="nav-NavLinks"
                    onClick={handleClick}
                  >
                    JavaScript
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    exact
                    to="/videotutorial"
                    // activeClassName="active"
                    className="nav-NavLinks"
                    onClick={handleClick}
                  >
                    React JS
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    exact
                    to="/videotutorial"
                    // activeClassName="active"
                    className="nav-NavLinks"
                    onClick={handleClick}
                  >
                    Node JS
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    exact
                    to="/videotutorial"
                    // activeClassName="active"
                    className="nav-NavLinks"
                    onClick={handleClick}
                  >
                    MongoDB
                  </NavLink>
                </div>
              </div>
            </div>
          </section>
          <div>
            {/* <button>Login</button>
            <button>Register</button> */}
            {/* <NavLink to="/register" >register</NavLink> */}
            <LogPro />
            {/* <RenderProfile /> */}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Navbar;
