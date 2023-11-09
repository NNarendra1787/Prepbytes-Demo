import React from 'react'
import HtPro from "../img/Pro/Node-Pro - Google Chrome 11_1_2023 12_07_30 PM.png"
import "./Comp.css"
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

function NodePro() {
  return (
<div>
        <Navbar />
      <section className="Projects">
        <h2>HTML BackTracking</h2>
        <section className="SidBox">
          <div className="sideImg">
            <img src={HtPro} alt="/" />
          </div>
          <div className="sideList">
            <ol>
                <li>Importing an Image with help of &lt;img&gt;</li>
                <li>Api Making and functions and for sending the information</li>
                <li>Coursole on Screen and rendering image with backend</li>
                <li>Accesign the information from backend</li>
                <li>using differnt type of hooks useState and useEffect</li>
                <li>Routing And links are using and also Dynamic Routing are there</li>
                <li>Where am using the navigation tag and also location tag for dynamic routing</li>
            </ol>
          </div>
        </section>
        <section className="Infromative">
        <h3>Hear Is the information about the project</h3>
        <p>In this project we are manking an block project whre the we make a dummy news website where the differnt types of news where are many differnt componet are rendering the information and with different Pages in we can passing the information</p>
        <p>In this project these project the conditional renderring for the only the seven news are visible on screen and other news are not available whenever the you will not cliking the down button are send and visible on screen and new thing are gon render </p>
        <p>On Navigation bar ther are 6 links whihc are home bollywood hollywood technology fitness and food and every page the information will changing as it automatically and its call condition and react routing functionlity</p>
        <p> we also using the differnt one more page this page is only for informative page or we can say for reading the news we using this page and many thing on that the page and more where </p>
        <p>This is the project that we madeing using all those the this that i menton on top for visitin this project you can go throw with this link <span><Link to="https://neon-stardust-e7315d.netlify.app/" >Backtraking Project</Link></span> </p>
        </section>
      </section>
    </div>
  )
}

export default NodePro