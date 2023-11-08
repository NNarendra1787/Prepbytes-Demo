import React from "react";
import Navbar from "../Navbar";
import "./Comp.css";
import DownPage from "../Home/DownPage";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import AddToCart from "../Cart/AddToCart";
// import PayPalApis from "../PaymentGet";
import Footer from "../Footer";
function MockTest() {
  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get("https://prepbytesserverbackend.onrender.com/user/Data")
      // axios.get("http://localhost:2002/user/Data")
      .then((res) => {
        setData(res.data);
        // setData(res.data.result);
        console.log("This is the Response data", res.data);
        console.log("data available with res", res.data.result);
      },[data]);
  });
  // console.log("Data", data);
  return (
    <div>
      <Navbar />
      <DownPage />
      <section className="MockHead">
        <section className="MockHeadData">
          <div className="MockCenter">
            <h2 className="MockHeadingPart">Mock Test</h2>
            <p className="MockPara">
              Technical and Aptitude Test is a very important process of most of
              the placement tests. Crack your next placement with series of
              PrepBytes practice and mock tests. Practice subject-wise and
              company-wise tests. Take real-time mock tests with other students
              and test your preparation.
            </p>
          </div>
        </section>
      </section>
      <section className="FeaturedList">
        <section className="FeaturedMain">
          <p className="FeaturedHeading">Featured Mock Tests</p>
          <section className="FeaturedContainer">
            <section className="FeaturedPast">
              <p className="FeaturePastPara">Past Mock Tests</p>
              <section className="FeaturedPastContainer">
                {data.map((item, ind) => (
                  <AddToCart no={item.no} 
                  image={item.image}
                  title={item.title} 
                  date={item.date}
                  date1={item.date1}
                  pip={item.pip}
                  part={item.part}
                  time={item.time}
                  due={item.due}
                  price={item.price}
                  />
                ))}
              </section>
            </section>
          </section>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default MockTest;
