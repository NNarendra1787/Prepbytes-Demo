import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../Redux/CartSlice";
import { loadStripe } from "@stripe/stripe-js";
import "../DropComp/Comp.css";

const AddToCart = (item) => {
  const { no, title, pip, part, due, time, date, date1, image } = item;
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const makePayment = async (
    no,
    image,
    title,
    time,
    date,
    date1,
    part,
    pip,
    due,
    price
  ) => {
    const stripe = await loadStripe(
      "pk_test_51O9gy5SEFOzonOOAGqAqnOEOCndCTqEGO47tUrynni8khJTBlLUxfPMbeQGKMkYozcEhkSWmIdLRf9buJ6X5ce8o00ZWsdfGOC"
    );

    const body = {
      products: [
        {
          id: no,
          img: title,
          time:time,
          name: image,
          price: 20000,
          quantity: 1,
        },
      ],
    };

    const headers = {
      "content-type": "application/json",
    };

    const response = await fetch(
      "http://localhost:2002/api/create-checkout-session",
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

  const handleCart = (no, title, image, pip, part, due, time, date, date1) => {
    if (token) {
      dispatch(
        add({
          no: no,
          title: title,
          image: image,
          pip: pip,
          part: part,
          due: due,
          time: time,
          date: date,
          date1: date1,
        })
      );
    } else {
      window.alert("Please login first");
    }
  };
  return (
    <div>
      <div className="MockCard">
        <div className="MockCard-top">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNi42MDEiIGhlaWdodD0iMjYuNjAxIiB2aWV3Qm94PSIwIDAgMjYuNjAxIDI2LjYwMSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzM5NjlhZDtzdHJva2U6IzM5NjlhZDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41IDAuNSkiPjxjaXJjbGUgY2xhc3M9ImEiIGN4PSIwLjUiIGN5PSIwLjUiIHI9IjAuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIgNikiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTIxLjg1MiwzLjc0OWExMi44LDEyLjgsMCwwLDAtMTguMSwxOC4xLDEyLjgwNSwxMi44MDUsMCwwLDAsMTUuNjc1LDEuOSwxLDEsMCwwLDAtMS4wMzYtMS43MTEsMTAuOSwxMC45LDAsMSwxLDMuMzgyLTMuMjUxLDEsMSwwLDAsMCwxLjY2MywxLjExMiwxMi43NjksMTIuNzY5LDAsMCwwLTEuNTgtMTYuMTU3WiIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMjM3LDE4N2ExLDEsMCwwLDAtMSwxdjguOWExLDEsMCwwLDAsMiwwVjE4OEExLDEsMCwwLDAsMjM3LDE4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjQuMiAtMTc3LjY1KSIvPjwvZz48L3N2Zz4="
            alt="/"
          />
          <div className="MockCard-share">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDE4IDIwIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojNWY4ZGM0O308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj48cGF0aCBjbGFzcz0iYSIgZD0iTTMxOS45ODYsMTguNzA4QTIuNjYsMi42NiwwLDEsMSwzMTcuMzI3LDE2LDIuNjg0LDIuNjg0LDAsMCwxLDMxOS45ODYsMTguNzA4Wm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMDIuNiAtMTUuMzc1KSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMzAxLjk0MSw2LjY2N2EzLjMwNywzLjMwNywwLDAsMS0zLjI3My0zLjMzMywzLjI3MywzLjI3MywwLDEsMSw2LjU0NSwwQTMuMzA3LDMuMzA3LDAsMCwxLDMwMS45NDEsNi42NjdabTAtNS40MTdhMi4wODQsMi4wODQsMCwxLDAsMi4wNDUsMi4wODMsMi4wNjcsMi4wNjcsMCwwLDAtMi4wNDUtMi4wODNabTAsMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4Ny4yMTMpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0zMTkuOTg2LDM2MC4wNDFhMi42NiwyLjY2LDAsMSwxLTIuNjU5LTIuNzA4QTIuNjg0LDIuNjg0LDAsMCwxLDMxOS45ODYsMzYwLjA0MVptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzAyLjYgLTM0My4zNzQpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0zMDEuOTQxLDM0OGEzLjMzNCwzLjMzNCwwLDEsMSwzLjI3My0zLjMzM0EzLjMwNywzLjMwNywwLDAsMSwzMDEuOTQxLDM0OFptMC01LjQxN2EyLjA4NCwyLjA4NCwwLDEsMCwyLjA0NSwyLjA4M0EyLjA2NywyLjA2NywwLDAsMCwzMDEuOTQxLDM0Mi41ODJabTAsMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4Ny4yMTMgLTMyNy45OTkpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yMS4zMTgsMTg5LjM3NmEyLjY2LDIuNjYsMCwxLDEtMi42NTktMi43MDhBMi42ODQsMi42ODQsMCwwLDEsMjEuMzE4LDE4OS4zNzZabTAsMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1LjM4NiAtMTc5LjM3NikiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTMuMjczLDE3Ny4zMzVhMy4zMzQsMy4zMzQsMCwwLDEsMC02LjY2NywzLjMzNCwzLjMzNCwwLDAsMSwwLDYuNjY3Wm0wLTUuNDE3YTIuMDg0LDIuMDg0LDAsMCwwLDAsNC4xNjcsMi4wODQsMi4wODQsMCwwLDAsMC00LjE2N1ptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xNjQuMDAxKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTE1LjE2Nyw5Ni4yOTFhLjgxNC44MTQsMCwwLDEtLjcxMi0uNDIxLjg0My44NDMsMCwwLDEsLjMwNi0xLjEzN2w3LjU5Mi00LjQwOGEuODA5LjgwOSwwLDAsMSwxLjExNi4zMTIuODQzLjg0MywwLDAsMS0uMzA2LDEuMTM3bC03LjU5Miw0LjQwOEEuOC44LDAsMCwxLDExNS4xNjcsOTYuMjkxWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDkuOTYzIC04Ni42OSkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTEyMi43OCwyNzIuMjk1YS44LjgsMCwwLDEtLjQtLjEwOWwtNy41OTItNC40MDhhLjg0My44NDMsMCwwLDEtLjMwNi0xLjEzNy44MDkuODA5LDAsMCwxLDEuMTE2LS4zMTJsNy41OTIsNC40MDhhLjg0My44NDMsMCwwLDEsLjMwNiwxLjEzN0EuODE2LjgxNiwwLDAsMSwxMjIuNzgsMjcyLjI5NVptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA5Ljk4NSAtMjU1LjgxOSkiLz48L2c+PC9zdmc+"
              alt="/"
            />
          </div>
        </div>
        <section className="FeaturedPastContainer">
          <div className="CardIm">
            <img src={image} alt="/" />
          </div>
          <p className="FutureCard-Heading1">{title}</p>
          <div className="FuturedCard-MiddlePart">
            <div className="MiddlePart-left">
              <p className="leftPart-top">{date}</p>
              <p className="leftPart-bottom">{date1}</p>
            </div>
            <hr className="amHR" />
            <div className="MiddlePart-Center">
              <p className="midPart-top">{pip}</p>
              <p className="midPart-bottom">{part}</p>
            </div>
            <hr className="amHR" />
            <div className="RightPart-right">
              <p className="leftPart-top">{time}</p>
              <p className="leftPart-bottom">{due}</p>
            </div>
          </div>
          <div className="MockTestCard__bottom">
            <button
              className="bottom--button"
              onClick={() => {
                makePayment(
                  no,
                  image,
                  pip,
                  part,
                  due,
                  time,
                  date,
                  date1,
                  title
                );
                handleCart(no, title, image, pip, part, due, time, date, date1);
              }}
            >
              Test Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddToCart;
