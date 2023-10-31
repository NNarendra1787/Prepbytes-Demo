import React from "react";
import "./ScdH.css";
import clgBy from "../img/standingboy stairs_of_approach(web).svg";

function ScdHome() {
  return (
    <div>
      <div className="DivMainFive">
        <div>
          <h2 className="HeadingWant">I WANT TO</h2>
        </div>
        <div className="ArticelBoxs">
          <div className="Box_Div_section">
            <img
              className="Box_Image"
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/prepare_for_campus.webp"
              alt=""
            ></img>
            <h4 className="Box_Heading_One">PREPARE FOR CAMPUS PLACEMENT</h4>
          </div>

          <div className="Box_Div_section">
            <img
              className="Box_Image"
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/master_competetive_pgm.webp"
              alt=""
            ></img>
            <h4 className="Box_Heading_Two">MASTER COMPETATIVE PROGRAMMIG</h4>
          </div>

          <div className="Box_Div_section">
            <img
              className="Box_Image"
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/learn_full_stack.webp"
              alt=""
            ></img>
            <h4 className="Box_Heading_One">BUILD DEVELOPMENT PROJECTS</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScdHome;
