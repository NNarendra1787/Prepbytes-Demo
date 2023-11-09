import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import "../Drop.css";
// import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartCount = cart.cartTotalQuantity;
  // const dispatch = useDispatch();

  const productCount = cart.cartItems.length;

  return (
    <div>
      <Navbar />
      <section className="CartPage">
        <div className="CartLeft">
          <div className="CartBox">
            {/* <img src="" alt="/" /> */}
            <svg
              className="proIcon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0L5 13.18zm6.04-9.66l-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19a2.04 2.04 0 00-1.92 0z"></path>
            </svg>
            <h3>My Courses</h3>
          </div>
          <div className="CartBox">
            <svg
              className="proIcon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path>
            </svg>
            <h3>My Profile</h3>
          </div>
          <div className="CartBox">
            <svg
              className="proIcon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm0 6.75c-2.34 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zm11.7-3.19c1.16.84 1.96 1.96 1.96 3.44V19h3c.55 0 1-.45 1-1v-.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z"></path>
            </svg>
            <h3>Share & Earn</h3>
          </div>
        </div>
        <div>
          {productCount === 0 ? (
            <div>
              <div className="Program">
                <h2>
                  Courses <span>{cartCount}</span>
                </h2>
                <h2>Track/Program(0)</h2>
              </div>
              <div>
                <h3>There is nothing in on dash board</h3>
              </div>
            </div>
          ) : (
            <div>
              <div className="Program">
                <h2>Courses(0)</h2>
                <h2>Track/Program(0)</h2>
              </div>
              <div className="CartItem">
                {cart.cartItems?.map((cartItem) => {
                  return (
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
                      <div className="CardIm">
                        <img src={cartItem.image} alt="/" />
                      </div>
                      <p className="FutureCard-Heading1">
                        {/* Aptitude Placement 2022 - Mock test 3 */}
                        {cartItem.title}
                      </p>
                      <div className="FuturedCard-MiddlePart">
                        <div className="MiddlePart-left">
                          <p className="leftPart-top">{cartItem.date}</p>
                          <p className="leftPart-bottom">{cartItem.date1}</p>
                        </div>
                        {/* <hr className="amHR" />
                        <div className="MiddlePart-Center">
                          <p className="midPart-top">{cartItem.pip}</p>
                          <p className="midPart-bottom">{cartItem.part}</p>
                        </div>
                        <hr className="amHR" />
                        <div className="RightPart-right">
                          <p className="leftPart-top">{cartItem.time}</p>
                          <p className="leftPart-bottom">{cartItem.due}</p>
                        </div> */}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
