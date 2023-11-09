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
        <h2>MERN E-Commerce</h2>
        <section className="SidBox">
          <div className="sideImg">
            <img src={HtPro} alt="/" />
          </div>
          <div className="sideList">
            <ol>
                <li>Importing an Image with help of &lt;img&gt; With the help of backend and storing the information on backend</li>
                <li>Advance using the functionality of react and also node and basice of mongobd</li>
                <li>Coursole slicder of advertisement and product that are the feaured or in new offers</li>
                <li>Add to cart functionality and payment getway</li>
                <li>Paymayent getway with the help of paypal</li>
                <li>React Reduc and routing all those thing are using for this project</li>
                <li>Where we are using payment getway and many mmore functinality are there</li>
            </ol>
          </div>
        </section>
        <section className="Infromative">
        <h3>Hear Is the information about the project</h3>
        <p>In This project or Ecommerce app we are manking many more functionlity and where we can see the mobile laptops speaker and one store i there in that store mouse keyboard many mobile and also the differnt page and available for wher the page of mobile phones and lpatops and also the scroller for differnt laptop and many thing are there and many more things to buy</p>
        <p>On the Store page there are many product are availe where ther differnt types of mobile and where in mobile ther are three differnt type of mobile which are vivo and apple and redmi anre ther mobile are availe on ther mobile page and mouse keyboard tv and and differnt companys laptop are there</p>
        <p>On Laptop page there are many thing like many companys laptos are there and you also can see the information about laptop from clicking on the title and you can also add to cart the product from that page</p>
        <p>Also login and signup functinality is avaliable whenever your not register on server you will never got the access for buying tose product or check the cart</p>
        <p>This is the project that we madeing using all those the this that i menton on top for visitin this project you can go throw with this link <span><Link to="https://splendorous-fox-dcef47.netlify.app/" >E-Commerce Project</Link></span> </p>
        </section>
      </section>
    </div>
  )
}

export default MERN