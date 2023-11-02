import React from "react";
// import Master from "../img/Masterhead(web).svg";
import aws from "../img/aws-ed-start.webp";
import future from "../img/future-skills-homepage.webp";
import google from "../img/Google-launchpad.webp";
import shelead from "../img/she-leads.webp";
import DownPage from "./DownPage";
import Navbar from "../Navbar";
import SecHom from "./SecHom";
import ScdHome from "./ScdHome";
// import clgBy from "../img/standingboy stairs_of_approach(web).svg"

function HomePage() {
  return (
    <section className="AllHome">
      <Navbar />
      <div className="HomePage">
        <section className="BigHome">
          <section className="HomeBox">
            <div className="HomeLeft">
              <div className="MidHead">
                <h1 className="firstHead">Start your journey of success</h1>
                <h1 className="secHead">Personalised Coding Programs</h1>
                <h1 className="secHead">to make coding easier for you</h1>
              </div>
              <h3 className="thHead">
                Want to know how PrepBytes can help you?
              </h3>
              <button className="btn">Know More</button>
            </div>
            <div className="HomeRight">
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Masterhead(web).svg" alt="/" className="imgs" />
              {/* <img src={Master} alt="/" className="imgs" /> */}
            </div>
          </section>
          <section className="sponcers">
            <img src={google} alt="/" />
            <img src={future} alt="/" />
            <img src={shelead} alt="/" />
            <img src={aws} alt="/" />
          </section>
        </section>
      </div>
      <DownPage />
      <SecHom />
      <ScdHome />
    </section>
  );
}

export default HomePage;
