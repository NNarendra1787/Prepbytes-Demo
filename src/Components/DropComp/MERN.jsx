import React from 'react'
import HtPro from "../img/Pro/MERN - Google Chrome 11_1_2023 12_10_11 PM.png"
import "./Comp.css"
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

function MERN() {
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
                <li>Basic Information about list type like ul and ol tags</li>
                <li>Where inputing the style of list where make differnt type of list</li>
                <li>With the different type of list</li>
                <li>Differenct type of border and differnet with are there</li>
                <li>Different type of Heading and paragragh tage are there</li>
                <li>Where we are using ther br and  underline tage and also many more tag</li>
            </ol>
          </div>
        </section>
        <section className="Infromative">
        <h3>Hear Is the information about the project</h3>
        <p>In This project we made many things with the help of HTML tag  and elements. This is the Backtracking project in this project i made many things where the help of it we exploring the different type of the heading which will present in the html. that heading am using in my project for seating the text and the with that help to make differnt type of ui desigining</p>
        <p>In This project we having the imge tag and that image tag is using for importing the images for our project and handling the size of image and many more</p>
        <p>At this project we using different type of list that we having and we learning in our HTML course that like unorderd and orderd list and description list that list are using for the differnt things to for the disinging the page</p>
        <p> we also using the differnt type of heading and paragragh tag and we using for basic styling br tag and strong tag br tag is using for brak and strong tag is using for the bold to the text and for italic we are using the em tag and all those using we made this project</p>
        <p>This is the project that we madeing using all those the this that i menton on top for visitin this project you can go throw with this link <span><Link to="https://nnarendra1787.github.io/projectHtml/" >Backtraking Project</Link></span> </p>
        </section>
      </section>
    </div>
  )
}

export default MERN