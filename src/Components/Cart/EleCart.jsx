import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { add } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";

const EleCart = (item) => {
  const { no, title, image, description } = item;
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const makePayment = async (no, title, image, description) => {
    const stripe = await loadStripe(
      "pk_test_51O9gy5SEFOzonOOAGqAqnOEOCndCTqEGO47tUrynni8khJTBlLUxfPMbeQGKMkYozcEhkSWmIdLRf9buJ6X5ce8o00ZWsdfGOC"
    );

    const body = {
      products: [
        {
          id: no,
          img: title,
          name: image,
          description: description,
          price: 25000,
          quantity: 1,
        },
      ],
    };
    const headers = {
      "content-type": "application/json",
    };

    const response = await fetch(
      "https://prepbytesserverbackend.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };
  const handleCart = (no, title, image, description, price) => {
    if (token) {
      dispatch(
        add({
          no: no,
          title: title,
          image: image,
          description: description,
        })
      );
    } else {
      window.alert("Please login First");
    }
  };
  return (
    <div>
      <section className="Register-Ele">
        <section className="Register-mid-Ele">
          <h2 className="Register-Head1">Payment Plans</h2>
          <h3 className="Register-Head2">
            Choose a payment plan sutable you need
          </h3>
          <div className="Elev-Card">
            <img src={image} className="hidImg" alt="" />
            <div className="Elve-mid-card">
              <h3>Pay Upfront*</h3>
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/tag4-01.webp"
                alt="/"
              />
            </div>
            <div className="Elve-Pay">
              <h3>Pay Now</h3>
              <h3 className="price">70,000</h3>
            </div>
            <hr />
            <div className="lastPay">
              <h3>EMI Starting at</h3>
              <h3>5833/Month</h3>
            </div>
          </div>
          <button
            className="btn2"
            onClick={() => {
              makePayment(no, item, title, description, image);
              handleCart(no, title, image, description);
            }}
          >
            Register
          </button>
        </section>
      </section>
    </div>
  );
};

export default EleCart;

{
  /* <button
        
        >
          
        </button> */
}
