import React from 'react'
import HtPro from "../img/Pro/Reminder-clock.png"
import "./Comp.css"
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

function JSPro() {
  return (
<div>
        <Navbar />
      <section className="Projects">
        <h2>JS Reminder Clock</h2>
        <section className="SidBox">
          <div className="sideImg">
            <img src={HtPro} alt="/" />
          </div>
          <div className="sideList">
            <ol>
                <li>Importing an Image with help of &lt;img&gt; and icons </li>
                <li>Basic things about js and and basice javascript using for thi project</li>
                <li>Where using the the basice and advance level funtionality for making the project</li>
                <li>Where date and image functionlity are using </li>
                <li>SetTimeout and SetInterval is using for date</li>
                <li>Dom Manupliation using for</li>
                <li>and many difernt thing are using</li>
            </ol>
          </div>
        </section>
        <section className="Infromative">
        <h3>Hear Is the information about the project</h3>
        <p>In this project we are using and doing DOM Manipulation for accesssing the Date and many more linke and Image </p>
        <p>In This project we having the imge tag and that image tag is using for importing the images for our project and handling the size of image where we are accessgin image with the help of javascript</p>
        <p>At using importing the image and and after date changing the image will be change and there are four differnt type of time Morning and Afternoon Evening and Night those image are changing and the down box are there will show that what change we will show at that box</p>
        <p>And That image are also change with the original time of duration will change and also the greeting text also changing when you will cliking on set Alaram the text and imge will change </p>
        <p>This is the project that we madeing using all those the this that i menton on top for visitin this project you can go throw with this link <span><Link to="https://nnarendra1787.github.io/Prpbytes-Project/Reminde-Clock/" >Reminder Clock Project</Link></span> </p>
        </section>
      </section>
    </div>
  )
}

export default JSPro