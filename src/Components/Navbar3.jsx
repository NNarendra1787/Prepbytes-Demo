import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar3() {
  // console.log("hello");
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar2">
        <div className="mainsiren">
          <div className="head2">
            <div className="bend2">The</div>
            <div className="siren">Siren</div>
          </div>
        </div>
        <div className="nav-container">
          <section className={click ? "nav-menu active" : "nav-menu"}>
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
                    onMouseOver={handleClick}
                    // onClick={handleCl}
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
                    onMouseOver={handleClick}
                    // onClick={handleCl}
                  >
                    Video Tutorials
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="Extra nav-item">
            <NavLink
                    exact
                    to="/videotutorial"
                    activeClassName="active"
                    className="nav-links"
                    onMouseOver={handleClick}
                    // onClick={handleCl}
                  >
                    Video Tutorials
                  </NavLink>
            </div>
            <li className="nav-item">
              <NavLink
                // exact
                to="/bollywood"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Bollywood
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/hollywood"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Hollywood
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/technology"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Technology
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/fitness"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Fitness
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/food"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Food
              </NavLink>
            </li>
          </section>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ?"fas fa-times" : "fas fa-bars"}></i> */}
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar3;
