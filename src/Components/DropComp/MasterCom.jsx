import React from "react";
import Navbar from "../Navbar";
import DownPage from "../Home/DownPage";

function MasterCom() {
  return (
    <div>
      <Navbar />
      <DownPage />
      <section className="CoursePage">
        <div className="CourseCarton">
          <img
            src="https://prepbytes-uat-images.s3.ap-south-1.amazonaws.com/ApplyNow.svg"
            alt="/"
            className="cartonImg"
          />
          <div className="CourseBtn">Enroll Now</div>
        </div>
        <section className="CourseCont">
          <div className="CourseLeft">
            <div className="CourseHead">
              <h1 className="CourseH1">MASTER COMPITATIVE PROGRAMMING</h1>
              <h6 className="sub_heading">
                Master Competitive Programming Fom Zero And Become A Top-Rated
                Coder{" "}
                <p className="sub_heading-highlighter">
                  Under The Guidance Of Top Competitive Programmers{" "}
                  <span className="sub_heading_second"></span>
                </p>
              </h6>
              <button className="CourseReBtn">Enroll Now</button>
            </div>
          </div>
          <div className="CourseRight">
            <picture className="Right-pic">
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-header-image.webp"
                alt="/"
              />
            </picture>
          </div>
        </section>
        <section className="CourseCont2">
          <div className="CourseCont2-sub">
            <div className="Sub-list1">
              <div className="list1-img">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp"
                  alt="/"
                />
              </div>
              <p className="list1-text">9 month intensive bootcamp</p>
            </div>
            <div className="Sub-list2">
              <div className="list2-img">
                <img
                  className="list2-imgs"
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-two.webp"
                  alt="/"
                />
              </div>
              <p className="list2-text">Quick Doubt Resolution</p>
            </div>
            <div className="Sub-list3">
              <div className="list3-img">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-three.webp"
                  alt="/"
                />
              </div>
              <p className="list3-text">
                Live coding sessions with top-rated coders
              </p>
            </div>
            <div className="Sub-list4">
              <div className="list4-img">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-four.webp"
                  alt="/"
                />
              </div>
              <p className="list4-text">Get Certificate on Cource Completed</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default MasterCom;
