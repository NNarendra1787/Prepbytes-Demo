import React from 'react'
import HtPro from "../img/Pro/Task-List - Google Chrome 11_1_2023 11_56_25 AM.png"
import "./Comp.css"
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

function CSSPro() {
  return (
    <div>
        <Navbar />
      <section className="Projects">
        <h2>CSS TODO TASK LIST</h2>
        <section className="SidBox">
          <div className="sideImg">
            <img src={HtPro} alt="/" />
          </div>
          <div className="sideList">
            <ol>
                <li>Importing an Icons with the help of flactican &lt;i&gt;</li>
                <li>Differnt type of tag like &lt;div&gt; &lt;span&gt; &lt;section&gt; &lt;nav&gt; &lt;header&gt;</li>
                <li>Using a differn type of styleing with the help of span tag in navbar</li>
                <li>For card we are using the div tag</li>
                <li>In Card There are very different type of heading and the &lt;a&gt; is use for rerender on another page</li>
                <li>For the list item are chcek or not been check using the checbox property</li>
                <li>Where we are using ther br and  underline tage and also many more tag</li>
            </ol>
          </div>
        </section>
        <section className="Infromative">
        <h3>Hear Is the information about the project</h3>
        <p>These is the one of the project from my jurney of become an full-stack-devloper/ Mern-stack-devloper in the prject i using many thing which will i learn from the mentor about css</p>
        <p>First i made one div and give that div sapcefice height and width and after of it i using my css knowlege for give the best visioual for i gave the box-shadow property this property make the navbar vary attractive am give white colore to it and sum property of flex and differnt type of color and finaly navbar complet</p>
        <p>The the text on the navbar am using div and inside of span tag those tag are helping me for giving the differnt color on those item inside on the navbar</p>
        <p>Then There are one button or anchor tag am using with the name of Add new task ang give it an icon with the help of font awsome for taking to another page using the ancore tag on it oncliking on the link it will redirect you to on this link</p>
        <p>Then ther are sum box like strucute you can see am made this stucture with the help of of section and dive tag i made fastliy ther are a section in that section six div tag and am using with usign my knowlege in css i did give backgreound color and then give the dispaly property flex and give the flex direction row and justify content space-around</p>
        <p>This is the project that we madeing using all those the this that i menton on top for visitin this project you can go throw with this link <span><Link to="https://nnarendra1787.github.io/Prpbytes-Project/ToDo_Project/index.html" >Todo CSS</Link></span> </p>
        </section>
      </section>
    </div>
  )
}

export default CSSPro