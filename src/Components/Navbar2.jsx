import React, { useState } from "react";

function Navbar2() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <div className="prepbytesNav">
        <div className="navbar">
          <NavLink to="/">
            <div>
              <img
                className="prebytes"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyEGQ_WYz8oQ_4izareGlN0uEch779fOe6Z7z9JDrA2J0DSOTFa9S3fsCuFnC_K8dnqQ&usqp=CAU"
                alt=""
              ></img>
            </div>
          </NavLink>

          <div className={click ? "nav-menu active" : "nav-menu"}>
            <div className="dropdown">
              <label className="nav-item ">Study Material</label>
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
              <label className="nav-item ">Course And Programs</label>
              <div className="dropdown-content">
                <div className="nav-item">
                  <NavLink
                    exact
                    to="/mastercompetativeprogram"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Master Competative Program
                  </NavLink>
                </div>

                <div className="nav-item">
                  <NavLink
                    exact
                    to="/fullstackprogram"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    FullStack Program
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="navCart">
              <NavLink
                exact
                to="/elevationacademy"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Elevation Academy
              </NavLink>
            </div>

            <div className="navCart">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </div>
          </div>

          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span>
                <img
                  className="icon"
                  src=" https://cdn-icons-png.flaticon.com/128/3161/3161830.png"
                  alt=""
                />{" "}
              </span>
            ) : (
              <span>
                <img
                  className="icon"
                  src="https://cdn-icons-png.flaticon.com/128/4204/4204600.png "
                  alt=""
                />
              </span>
            )}
          </div>

          <div>
            <Profile />
          </div>
        </div>
      </div>

      <br></br>
    </div>
  );
}

export default Navbar2;
