import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../Redux/CartSlice";

const FullCart = (item) => {
  const { no, title, image, description, price } = item;
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

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
          price: 30000,
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
      <div className="Enroll_Fees">{price}</div>
      <div className="Enroll_Now_Batch">
        <button className="Enroll_Now_Batch_Button" onClick={()=>{makePayment(no,item,title,description,image);handleCart(no, title, image, description)}}>Enroll Now</button>
        <div className="Enroll_Now_Batch_Button_One">Try for free</div>
      </div>
    </div>
  );
};

export default FullCart;
