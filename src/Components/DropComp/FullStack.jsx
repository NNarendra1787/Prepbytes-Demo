import React from 'react'
// import Layout from '../../../Layout'
import './Comp.css'
import Img from '../img/Pro/Feature.webp'
import DownPage from '../Home/DownPage'
import Footer from '../Footer'

const FullStackProgram = () => {
  return (
    <>
    <DownPage />
      <div>
        <div className='fullStack_program_First_Div'>
          <div className='fullStack_program_First'>
            <div>
              <h6 className='FullTopHead'>Partner with</h6>
              <img className='fullStack_program_First_Image' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/development-programs/header-logo.svg' alt=''></img>
            </div>
            <h3 className='Full-Head'>Learn Full Stack Web  Development & Build Real World Projects using React & Node</h3>
            <h5 className='Full-Med'>Full Stack Web Development Certification Course  -Accredited by Nasscom, approved by the  Government India.</h5>
            <button className='fullStack_program_First_button'>Download Syllabus</button>
          </div>


          <div className='Fullstack_Second_Div'>
            <div className='FullStack_Seconf_subDiv'>Next Batch starts:  1st May, 2023 <span className='FullStack_Seconf_subDiv_sub'> Limited seats available</span></div>
            <div className='FullStack_Seconf_subDiv'>Program Duration: 4 - 5 months<span className='FullStack_Seconf_subDiv_sub'>4 - 5 months 15-20 hours/week</span> </div>
            <div className='FullStack_Seconf_subDiv'>Learning Format <span className='FullStack_Seconf_subDiv_sub'> <br></br>Recorded Lectures + Live Classes</span>

            </div>
          </div>
        </div>

        <div className='Batch_radio_button'>
          <div  className='EnrollNow'>SELECT BATCH</div>

          <div className='Batch_radio_button_radio'>
            <div className='EnrolmentStarted'>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label  className='EnrollNow'>1st May <br></br>
            <span className='EnrollmentSpan'> Enrolment Started </span> </label>
            </div>

            <div className='EnrolmentStarted'>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label  className='EnrollNow'>15th May <br></br>
            <span className='EnrollmentSpan'> Enrolment Started</span> </label>
            </div>
          </div>

          <div>
            <div className='Enroll_Fees'>₹ 30000</div>
            <div className='Enroll_Now_Batch'>
              <div className='Enroll_Now_Batch_Button'>Enroll Now</div>
              <div className='Enroll_Now_Batch_Button_One'>Try for free</div>
            </div>
          </div>
        {/* <hr></hr> */}
        </div>

        <div className='Languages_FullStack'>
          <div className='Full-Text'>
            <h3 className='Languages_FullStack_head'>Languages & Tools you will learn</h3>
            <h6 className='Languages_FullStack_para'>Start learning web development from basics of HTML, CSS, Javascript.Master latest technologies like React, Node, Express. Get hands on Github, MongoDB, Google Analytics, Facebook Analytics</h6>
          </div>
          <div>
            <img className='Languages_FullStack_Image' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/tools1.png' alt=''></img>
          </div>
        </div>

        <div className='Finish_Program'>
          <div>
            <img className='Finish_Program_Image' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/girlimage.webp' alt=''></img>
          </div>

          <div className='Finish_program_SeconD_div'>
            <h3 className='head'>What you will be after finishing the program?</h3>
            <div>
              <div className='Finish_program_SeconD_imgHead'>
                <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/certificate.svg' alt=''></img>
                <h6 className='para'>Certified Full stack Developer</h6>
              </div>
              <div className='Finish_program_SeconD_imgHead'>
                <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/realtime.svg' alt=''></img>
                <h6 className='para'>Experience of Real world work</h6>
              </div>
              <div className='Finish_program_SeconD_imgHead'>
                <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/excellent.svg' alt=''></img>
                <h6 className='para'>Ready to crack any web developer interview</h6>
              </div>
            </div>
          </div>


        </div>

        <br></br>
        <div>
          <img className='ImageDiv' src={Img} alt=''></img>
        </div>


      </div>
      <Footer />
    </>
  )
}

export default FullStackProgram