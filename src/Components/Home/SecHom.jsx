import React from "react";
import clgBy from "../img/standingboy stairs_of_approach(web).svg";
import clan from "../img/personalised_learning.svg";
import codLive from "../img/code_live_with_experts.svg";
import totalLive from "../img/ask_doubts_totally_live.svg";
import prac from "../img/personalised_practice.svg"
import locat from "../img/location achieve_your_coding_dream.svg"
import rArrow from "../img/arrow to right download.svg";
import LArr from "../img/arrow to left download.svg";

const SecHom = () => {
  return (
    <section className="Mid-Parent">
      <section className="Mid-Main">
        <div className="Mid-left">
          <div>
            <img src={clgBy} alt="/" loading="lazy" className="left-img" />
          </div>
        </div>
        <section className="Mid-right">
          <p className="Mid-right-heading">
            How PrepBytes Mentorship driven Personalised Learning works?
          </p>
          <section>
            <section className="cardOne">
              <div className="card-left">
                <p className="card-one-left-heading">
                PERSONALISED LECTURES & WEEKLY PLAN
                </p>
                <div className="box">
                  <img src={clan} alt="/" />
                  <p className="card-one-left-box-text">
                    Get learning videos &amp; weekly plan based on your coding
                    skills
                  </p>
                </div>
              </div>
              <div className="card-right-arrow">
                <img src={rArrow} alt="/" />
              </div>
            </section>
            <section className="CardTwo">
              <div className="left-Part">
                <img src={LArr} alt="/" />
              </div>
              <div className="card-two-right">
                <p className="card-two-right-heading">PERSONALISED CODING ASSIGNMENTS</p>
                <div className="card-two-right-box">
                  <img src={codLive} alt="/" />
                  <p>
                    Practice Coding question that adapts based on your progress
                  </p>
                </div>
              </div>
            </section>
            <section className="cardOne">
              <div className="card-left">
                <p className="card-three-left-heading">
                  DOUBT SOLVING BY CODE EXPERT
                </p>
                <div className="third-box">
                  <img src={totalLive} alt="/" />
             
                  <p className="card-three-left-box-text">
                    Getting Stuck While Coding? Get all your doubts resolved.
                  </p>
                </div>
              </div>
              <div className="card-right-arrow">
                <img src={rArrow} alt="/" />
              </div>
            </section>
            <section className="CardTwo">
              <div className="left-Part">
                <img src={LArr} alt="/" />
              </div>
              <div className="card-four-right">
              <p className="card-four-right-heading">CODE LIVE WITH TOP CODERS</p>
                <div className="card-four-right-box">
                  <img src={prac} alt="/" />
                  <p>
                  Topic wise Live Coding sessions with top rated coders
                  </p>
                </div>
              </div>
            </section>
            <div className="locat">
              <img src={locat} alt="/" />
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default SecHom;
