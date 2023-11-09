import React from "react";
// import Layout from "../../../Layout";
import "./Comp.css";
import Navbar from "../Navbar";
import image from "../img/Pro/PrepBytes Elevation Academy _ Full Stack Web Development - Google Chrome 11_4_2023 5_06_01 PM.png";
import Footer from "../Footer";
import ElevAppl from "./ElevAppl";

const ElevationA = () => {
  const HandleDown = ()=>{
    window.scrollTo(0, document.body.scrollHeight)
  }
  return (
    <>
      <Navbar />
      <div className="Elevation_Main_Div">
        <div>
          <div className="Elevation_First_Div">
            <div className="Elevation_First_para">
              <h3 className="Elevation_Div_First_heading">
                PrepBytes Elevation Academy - Full Stack Web Development Career
              </h3>
              <p className="Elevation_Div_First_para">
                Enroll in PrepBytes Elevation Academy - Full Stack Program and
                Guaranteed Tech Job of minimum 5 LPA.
              </p>
              <ul className="ul">
                <li>Complete Live Class from experts</li>
                <li>Be the best Full stack developer</li>
                <li>Job Guarantee</li>
              </ul>
              <div>
                <button className="Elevation_First_Div_Button" onClick={HandleDown}>
                  Apply Now
                </button>
                <button className="Elevation_First_Div_Button">
                  Get a Call Back{" "}
                </button>
              </div>
            </div>

            <div>
              <img
                className="Elevation_First_Div_Image"
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/ISA-masthead-mern-5.webp"
                alt="/"
              ></img>
            </div>
          </div>

          <div>
            <img
              className="Elevation_First_Div_Second_Image"
              src={image}
              alt=""
            ></img>
          </div>
        </div>

        <section className="Elevation-DreamComp">
          <div>
            <h1>How will you reach to you dream job?</h1>
          </div>
          <section>
            <div className="Elevation-Dream">
              <div className="Ele-left">
                <span className="Ele-1">1</span>
                <h3 className="Ele-left-1">Application & Shortlisting</h3>
              </div>
              <div className="Ele-right">
                <span>
                  Apply, fill the form &amp; wait till we review your
                  application. You will be selected based on the eligibility
                  criteria (2023, 2022 &amp; 2021 passouts)
                </span>
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Application%2B%2BShortlisting.webp"
                  alt="/"
                />
              </div>
            </div>
            <div className="Elevation-Dream">
              <div className="Ele-left">
                <span className="Ele-2">2</span>
                <h3 className="Ele-left-2">Attend Free Webinar</h3>
              </div>
              <div className="Ele-right">
                <span>
                  Go through the free classes and learn the important concepts
                  while understanding how the program unfolds.
                </span>
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/5%2BDays%2BFree%2BClass.webp"
                  alt="/"
                />
              </div>
            </div>
            <div className="Elevation-Dream">
              <div className="Ele-left">
                <span className="Ele-3">3</span>
                <h3 className="Ele-left-3">Batch Commenenment</h3>
              </div>
              <div className="Ele-right">
                <span>
                  Embark on your journey of success once you receive the offer
                  letter for successful enrolment.
                </span>
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Complete%2BEnrollment%2B.webp"
                  alt="/"
                />
              </div>
            </div>
            <div className="Elevation-Dream">
              <div className="Ele-left">
                <span className="Ele-4">4</span>
                <h3 className="Ele-left-4">7 Months Program</h3>
              </div>
              <div className="Ele-right">
                <span>
                  You have now signed up for a learning-filled journey of 7
                  months that ends with you being placed in your dream company.
                </span>
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/4%2BMonths%2BPrograms.webp"
                  alt="/"
                />
              </div>
            </div>
            <div className="Elevation-Dream">
              <div className="Ele-left">
                <span className="Ele-5">5</span>
                <h3 className="Ele-left-5">Garenteed Placement</h3>
              </div>
              {/* <hr className="hrr" /> */}
              <div className="Ele-right">
                <span>
                  The program comes with interview opportunities and a placement
                  guarantee of minimum 5 LPA.
                </span>
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Interview%2BOpportunities%2B.webp"
                  alt="/"
                />
              </div>
            </div>
          </section>
        </section>
        <br></br>
        <br></br>
        <h3 className="Ele-Why">Why PrepBytes Elevation Academy?</h3>

        <div className="Elevation_second_div">
          <div className="Live_Learning">
            <img
              className="Live_Learning_image"
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Live+Learning.webp"
              alt=""
            ></img>
            <p className="LiveLearningpara">Live Learning</p>
            <p className="Live_Learning_Paragraph">
              Master Mern Stack in Live Classes taken by Experts in live classes
            </p>
          </div>

          <div className="Live_Learning">
            <img
              className="Live_Learning_image"
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/1+week+of+Free+Classes.webp"
              alt=""
            ></img>
            <p className="LiveLearningpara">Learn with Experts</p>
            <p className="Live_Learning_Paragraph">
              Learn with gain access to real-time web development experience.
            </p>
          </div>

          <div className="Live_Learning">
            <img
              className="Live_Learning_image"
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Learn+by+Doing.webp"
              alt=""
            ></img>
            <p className="LiveLearningpara">Learn by Doing</p>
            <p className="Live_Learning_Paragraph">
              Gain in depth experience by building real world projects with
              accuracy
            </p>
          </div>

          <div className="Live_Learning">
            <img
              className="Live_Learning_image"
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Resume+Building.webp"
              alt=""
            ></img>
            <p className="LiveLearningpara">Resume Building</p>
            <p className="Live_Learning_Paragraph">
              Get a resume that companies would shortlist with expertise.
            </p>
          </div>

          <div className="Live_Learning">
            <img
              className="Live_Learning_image"
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Mock+Interviews.webp"
              alt=""
            ></img>
            <p className="LiveLearningpara">Mock Interviews</p>
            <p className="Live_Learning_Paragraph">
              Interview practice with industry veterans with real-time feedbacks
            </p>
          </div>

          <div className="Live_Learning">
            <img
              className="Live_Learning_image"
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Interview+Opportunities.webp"
              alt=""
            ></img>
            <p className="LiveLearningpara">Interview Opportunities</p>
            <p className="Live_Learning_Paragraph">
              Get developer interview opportunities after course completion
            </p>
          </div>
        </div>
        <ElevAppl />
        
      </div>
      <Footer />
    </>
  );
};

export default ElevationA;
