import React from 'react'
import HtPro from "../img/Pro/React - Google Chrome 11_1_2023 12_05_01 PM.png"
import "./Comp.css"
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

function ReactPro() {
  return (
    <div>
        <Navbar />
      <section className="Projects">
        <h2>REACT THE SIREN</h2>
        <section className="SidBox">
          <div className="sideImg">
            <img src={HtPro} alt="/" />
          </div>
          <div className="sideList">
            <ol>
                <li>Importing an Image with help of &lt;img&gt; and also and coursole we fixing image in greed view</li>
                <li>Basic Information React and basie hooke like usestate and useEffect and many orther hooks</li>
                <li>Different type of location and navigation for naivigate to another page</li>
                <li>Where down side a footer is available and many data which is come from the api fetching the data</li>
                <li>Condition rendering is avaliable</li>
                <li>Lazy loading and More functionality are there</li>
                <li>And many more things are there</li>
            </ol>
          </div>
        </section>
        <section className="Infromative">
        <h3>Hear Is the information about the project</h3>
        <p>In this project we are manking an block project whre the we make a dummy news website where the differnt types of news where are many differnt componet are rendering the information and with different Pages in we can passing the information</p>
        <p>In this project these project the conditional renderring for the only the seven news are visible on screen and other news are not available whenever the you will not cliking the down button are send and visible on screen and new thing are gon render </p>
        <p>On Navigation bar ther are 6 links whihc are home bollywood hollywood technology fitness and food and every page the information will changing as it automatically and its call condition and react routing functionlity</p>
        <p> we also using the differnt one more page this page is only for informative page or we can say for reading the news we using this page and many thing on that the page and more where </p>
        <p>This is the project that we madeing using all those the this that i menton on top for visitin this project you can go throw with this link <span><Link to="https://jade-medovik-92c884.netlify.app" >Backtraking Project</Link></span> </p>
        </section>
      </section>
    </div>
  )
}

export default ReactPro