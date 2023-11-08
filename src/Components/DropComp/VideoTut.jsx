import React from "react";
import Navbar from "../Navbar";
import DownPage from "../Home/DownPage";
import { Link } from "react-router-dom";

function VideoTut() {
  return (
    <div>
      <Navbar />
      <DownPage />
      <section className="videoHead">
        <section className="videoHeadContainer">
          <div className="videoHeadLeft">
            <h1 className="videoTitle">Prepbytes Video Library</h1>
            <p className="videoData">
              Increase your knowledge with PrepBytes free videos. PrepBytes
              video library is a repository of more than 250 videos containing
              videos on Competitive Programming , Language Fundamentals - C,
              C++, Java, Data Structures and Algorithms, Aptitude, Operating
              System, Interview Questions and much more all at one place.{" "}
            </p>
          </div>
          <img
            src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/video_lib_illustration.png"
            alt="/" className="vidImg"
          />
        </section>
      </section>
      <section className="videosData">
        <section className="videoCont">
          <h2 className="videoContTitle">CATEGORIES</h2>
          <section className="videoCards">
            <Link>
              <div className="videotab">
                <div className="cardvidtop">
                  {/* <video src="" className="vid"></video> */}
                  <img
                    src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_competitive.png"
                    className="vid"
                    alt="/"
                  />
                </div>
                <div className="cardvidmid">
                  <p className="para1">Competitive Programming</p>
                  <p className="para2">
                   Competitive Programming questions solved bt top rated coders
                  </p>
                </div>
                <div className="vidBot">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBpZD0ieW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjguMTI2IiBoZWlnaHQ9IjI4LjEyNiIgdmlld0JveD0iMCAwIDI4LjEyNiAyOC4xMjYiPgogIDxwYXRoIGlkPSJQYXRoXzY3NyIgZGF0YS1uYW1lPSJQYXRoIDY3NyIgZD0iTTIyNC4xMTMsMjE1Ljk4NWw2LjktMy45NzMtNi45LTMuOTczWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuOTcyIC0xOTcuNzgxKSIgZmlsbD0iIzcyODM5YyIvPgogIDxwYXRoIGlkPSJQYXRoXzY3OCIgZGF0YS1uYW1lPSJQYXRoIDY3OCIgZD0iTTE0LjA2MywwQTE0LjA2MywxNC4wNjMsMCwxLDAsMjguMTI2LDE0LjA2MywxNC4wNjUsMTQuMDY1LDAsMCwwLDE0LjA2MywwWk0yMi44NSwxNC4wNzdhMjMuMjExLDIzLjIxMSwwLDAsMS0uMzYyLDQuMjI3LDIuMiwyLjIsMCwwLDEtMS41NDksMS41NDksNTMuNDUsNTMuNDUsMCwwLDEtNi44NzYuMzYyLDUxLjUzOCw1MS41MzgsMCwwLDEtNi44NzYtLjM3NkEyLjIsMi4yLDAsMCwxLDUuNjM4LDE4LjI5YTIzLjEwOSwyMy4xMDksMCwwLDEtLjM2Mi00LjIyNywyMy4yLDIzLjIsMCwwLDEsLjM2Mi00LjIyN0EyLjI0NywyLjI0NywwLDAsMSw3LjE4Nyw4LjI3M2E1My40NTEsNTMuNDUxLDAsMCwxLDYuODc2LS4zNjIsNTEuNDI5LDUxLjQyOSwwLDAsMSw2Ljg3Ni4zNzYsMi4yLDIuMiwwLDAsMSwxLjU0OSwxLjU0OUEyMi4wMjYsMjIuMDI2LDAsMCwxLDIyLjg1LDE0LjA3N1ptMCwwIiBmaWxsPSIjNzI4MzljIi8+Cjwvc3ZnPgo="
                    alt="/"
                  />
                  <p className="vidBotText">21 Videos</p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="videotab">
                <div className="cardvidtop">
                  {/* <video src="" className="vid"></video> */}
                  <img
                    src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_interview.png"
                    className="vid"
                    alt="/"
                  />
                </div>
                <div className="cardvidmid">
                  <p className="para1">Interview Prepration</p>
                  <p className="para2">
                    Commanly ask coding question in interview question solved
                    step by step
                  </p>
                </div>
                <div className="vidBot">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBpZD0ieW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjguMTI2IiBoZWlnaHQ9IjI4LjEyNiIgdmlld0JveD0iMCAwIDI4LjEyNiAyOC4xMjYiPgogIDxwYXRoIGlkPSJQYXRoXzY3NyIgZGF0YS1uYW1lPSJQYXRoIDY3NyIgZD0iTTIyNC4xMTMsMjE1Ljk4NWw2LjktMy45NzMtNi45LTMuOTczWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuOTcyIC0xOTcuNzgxKSIgZmlsbD0iIzcyODM5YyIvPgogIDxwYXRoIGlkPSJQYXRoXzY3OCIgZGF0YS1uYW1lPSJQYXRoIDY3OCIgZD0iTTE0LjA2MywwQTE0LjA2MywxNC4wNjMsMCwxLDAsMjguMTI2LDE0LjA2MywxNC4wNjUsMTQuMDY1LDAsMCwwLDE0LjA2MywwWk0yMi44NSwxNC4wNzdhMjMuMjExLDIzLjIxMSwwLDAsMS0uMzYyLDQuMjI3LDIuMiwyLjIsMCwwLDEtMS41NDksMS41NDksNTMuNDUsNTMuNDUsMCwwLDEtNi44NzYuMzYyLDUxLjUzOCw1MS41MzgsMCwwLDEtNi44NzYtLjM3NkEyLjIsMi4yLDAsMCwxLDUuNjM4LDE4LjI5YTIzLjEwOSwyMy4xMDksMCwwLDEtLjM2Mi00LjIyNywyMy4yLDIzLjIsMCwwLDEsLjM2Mi00LjIyN0EyLjI0NywyLjI0NywwLDAsMSw3LjE4Nyw4LjI3M2E1My40NTEsNTMuNDUxLDAsMCwxLDYuODc2LS4zNjIsNTEuNDI5LDUxLjQyOSwwLDAsMSw2Ljg3Ni4zNzYsMi4yLDIuMiwwLDAsMSwxLjU0OSwxLjU0OUEyMi4wMjYsMjIuMDI2LDAsMCwxLDIyLjg1LDE0LjA3N1ptMCwwIiBmaWxsPSIjNzI4MzljIi8+Cjwvc3ZnPgo="
                    alt="/"
                  />
                  <p className="vidBotText">21 Videos</p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="videotab">
                <div className="cardvidtop">
                  {/* <video src="" className="vid"></video> */}
                  <img
                    src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_ds.png"
                    className="vid"
                    alt="/"
                  />
                </div>
                <div className="cardvidmid">
                  <p className="para1">Data Structures and Algorithms</p>
                  <p className="para2">
                    Basic concepts of data Structures and algo and Ds/ Algo problems solved
                  </p>
                </div>
                <div className="vidBot">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBpZD0ieW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjguMTI2IiBoZWlnaHQ9IjI4LjEyNiIgdmlld0JveD0iMCAwIDI4LjEyNiAyOC4xMjYiPgogIDxwYXRoIGlkPSJQYXRoXzY3NyIgZGF0YS1uYW1lPSJQYXRoIDY3NyIgZD0iTTIyNC4xMTMsMjE1Ljk4NWw2LjktMy45NzMtNi45LTMuOTczWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuOTcyIC0xOTcuNzgxKSIgZmlsbD0iIzcyODM5YyIvPgogIDxwYXRoIGlkPSJQYXRoXzY3OCIgZGF0YS1uYW1lPSJQYXRoIDY3OCIgZD0iTTE0LjA2MywwQTE0LjA2MywxNC4wNjMsMCwxLDAsMjguMTI2LDE0LjA2MywxNC4wNjUsMTQuMDY1LDAsMCwwLDE0LjA2MywwWk0yMi44NSwxNC4wNzdhMjMuMjExLDIzLjIxMSwwLDAsMS0uMzYyLDQuMjI3LDIuMiwyLjIsMCwwLDEtMS41NDksMS41NDksNTMuNDUsNTMuNDUsMCwwLDEtNi44NzYuMzYyLDUxLjUzOCw1MS41MzgsMCwwLDEtNi44NzYtLjM3NkEyLjIsMi4yLDAsMCwxLDUuNjM4LDE4LjI5YTIzLjEwOSwyMy4xMDksMCwwLDEtLjM2Mi00LjIyNywyMy4yLDIzLjIsMCwwLDEsLjM2Mi00LjIyN0EyLjI0NywyLjI0NywwLDAsMSw3LjE4Nyw4LjI3M2E1My40NTEsNTMuNDUxLDAsMCwxLDYuODc2LS4zNjIsNTEuNDI5LDUxLjQyOSwwLDAsMSw2Ljg3Ni4zNzYsMi4yLDIuMiwwLDAsMSwxLjU0OSwxLjU0OUEyMi4wMjYsMjIuMDI2LDAsMCwxLDIyLjg1LDE0LjA3N1ptMCwwIiBmaWxsPSIjNzI4MzljIi8+Cjwvc3ZnPgo="
                    alt="/"
                  />
                  <p className="vidBotText">21 Videos</p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="videotab">
                <div className="cardvidtop">
                  {/* <video src="" className="vid"></video> */}
                  <img
                    src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_aptitude.png"
                    className="vid"
                    alt="/"
                  />
                </div>
                <div className="cardvidmid">
                  <p className="para1">Aptitude</p>
                  <p className="para2">
                    Aptitude practice question and puzzles to boost your thinking brain
                  </p>
                </div>
                <div className="vidBot">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBpZD0ieW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjguMTI2IiBoZWlnaHQ9IjI4LjEyNiIgdmlld0JveD0iMCAwIDI4LjEyNiAyOC4xMjYiPgogIDxwYXRoIGlkPSJQYXRoXzY3NyIgZGF0YS1uYW1lPSJQYXRoIDY3NyIgZD0iTTIyNC4xMTMsMjE1Ljk4NWw2LjktMy45NzMtNi45LTMuOTczWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuOTcyIC0xOTcuNzgxKSIgZmlsbD0iIzcyODM5YyIvPgogIDxwYXRoIGlkPSJQYXRoXzY3OCIgZGF0YS1uYW1lPSJQYXRoIDY3OCIgZD0iTTE0LjA2MywwQTE0LjA2MywxNC4wNjMsMCwxLDAsMjguMTI2LDE0LjA2MywxNC4wNjUsMTQuMDY1LDAsMCwwLDE0LjA2MywwWk0yMi44NSwxNC4wNzdhMjMuMjExLDIzLjIxMSwwLDAsMS0uMzYyLDQuMjI3LDIuMiwyLjIsMCwwLDEtMS41NDksMS41NDksNTMuNDUsNTMuNDUsMCwwLDEtNi44NzYuMzYyLDUxLjUzOCw1MS41MzgsMCwwLDEtNi44NzYtLjM3NkEyLjIsMi4yLDAsMCwxLDUuNjM4LDE4LjI5YTIzLjEwOSwyMy4xMDksMCwwLDEtLjM2Mi00LjIyNywyMy4yLDIzLjIsMCwwLDEsLjM2Mi00LjIyN0EyLjI0NywyLjI0NywwLDAsMSw3LjE4Nyw4LjI3M2E1My40NTEsNTMuNDUxLDAsMCwxLDYuODc2LS4zNjIsNTEuNDI5LDUxLjQyOSwwLDAsMSw2Ljg3Ni4zNzYsMi4yLDIuMiwwLDAsMSwxLjU0OSwxLjU0OUEyMi4wMjYsMjIuMDI2LDAsMCwxLDIyLjg1LDE0LjA3N1ptMCwwIiBmaWxsPSIjNzI4MzljIi8+Cjwvc3ZnPgo="
                    alt="/"
                  />
                  <p className="vidBotText">21 Videos</p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="videotab">
                <div className="cardvidtop">
                  {/* <video src="" className="vid"></video> */}
                  <img
                    src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_cpp.png"
                    className="vid"
                    alt="/"
                  />
                </div>
                <div className="cardvidmid">
                  <p className="para1">C++ Programming</p>
                  <p className="para2">
                    Deep dive into the funcdamentals of C++ Programming
                  </p>
                </div>
                <div className="vidBot">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBpZD0ieW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjguMTI2IiBoZWlnaHQ9IjI4LjEyNiIgdmlld0JveD0iMCAwIDI4LjEyNiAyOC4xMjYiPgogIDxwYXRoIGlkPSJQYXRoXzY3NyIgZGF0YS1uYW1lPSJQYXRoIDY3NyIgZD0iTTIyNC4xMTMsMjE1Ljk4NWw2LjktMy45NzMtNi45LTMuOTczWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuOTcyIC0xOTcuNzgxKSIgZmlsbD0iIzcyODM5YyIvPgogIDxwYXRoIGlkPSJQYXRoXzY3OCIgZGF0YS1uYW1lPSJQYXRoIDY3OCIgZD0iTTE0LjA2MywwQTE0LjA2MywxNC4wNjMsMCwxLDAsMjguMTI2LDE0LjA2MywxNC4wNjUsMTQuMDY1LDAsMCwwLDE0LjA2MywwWk0yMi44NSwxNC4wNzdhMjMuMjExLDIzLjIxMSwwLDAsMS0uMzYyLDQuMjI3LDIuMiwyLjIsMCwwLDEtMS41NDksMS41NDksNTMuNDUsNTMuNDUsMCwwLDEtNi44NzYuMzYyLDUxLjUzOCw1MS41MzgsMCwwLDEtNi44NzYtLjM3NkEyLjIsMi4yLDAsMCwxLDUuNjM4LDE4LjI5YTIzLjEwOSwyMy4xMDksMCwwLDEtLjM2Mi00LjIyNywyMy4yLDIzLjIsMCwwLDEsLjM2Mi00LjIyN0EyLjI0NywyLjI0NywwLDAsMSw3LjE4Nyw4LjI3M2E1My40NTEsNTMuNDUxLDAsMCwxLDYuODc2LS4zNjIsNTEuNDI5LDUxLjQyOSwwLDAsMSw2Ljg3Ni4zNzYsMi4yLDIuMiwwLDAsMSwxLjU0OSwxLjU0OUEyMi4wMjYsMjIuMDI2LDAsMCwxLDIyLjg1LDE0LjA3N1ptMCwwIiBmaWxsPSIjNzI4MzljIi8+Cjwvc3ZnPgo="
                    alt="/"
                  />
                  <p className="vidBotText">21 Videos</p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="videotab">
                <div className="cardvidtop">
                  {/* <video src="" className="vid"></video> */}
                  <img
                    src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_os.png"
                    className="vid"
                    alt="/"
                  />
                </div>
                <div className="cardvidmid">
                  <p className="para1">Operating System</p>
                  <p className="para2">
                    Learn in-depth concepts of Operating System easily
                  </p>
                </div>
                <div className="vidBot">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBpZD0ieW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjguMTI2IiBoZWlnaHQ9IjI4LjEyNiIgdmlld0JveD0iMCAwIDI4LjEyNiAyOC4xMjYiPgogIDxwYXRoIGlkPSJQYXRoXzY3NyIgZGF0YS1uYW1lPSJQYXRoIDY3NyIgZD0iTTIyNC4xMTMsMjE1Ljk4NWw2LjktMy45NzMtNi45LTMuOTczWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuOTcyIC0xOTcuNzgxKSIgZmlsbD0iIzcyODM5YyIvPgogIDxwYXRoIGlkPSJQYXRoXzY3OCIgZGF0YS1uYW1lPSJQYXRoIDY3OCIgZD0iTTE0LjA2MywwQTE0LjA2MywxNC4wNjMsMCwxLDAsMjguMTI2LDE0LjA2MywxNC4wNjUsMTQuMDY1LDAsMCwwLDE0LjA2MywwWk0yMi44NSwxNC4wNzdhMjMuMjExLDIzLjIxMSwwLDAsMS0uMzYyLDQuMjI3LDIuMiwyLjIsMCwwLDEtMS41NDksMS41NDksNTMuNDUsNTMuNDUsMCwwLDEtNi44NzYuMzYyLDUxLjUzOCw1MS41MzgsMCwwLDEtNi44NzYtLjM3NkEyLjIsMi4yLDAsMCwxLDUuNjM4LDE4LjI5YTIzLjEwOSwyMy4xMDksMCwwLDEtLjM2Mi00LjIyNywyMy4yLDIzLjIsMCwwLDEsLjM2Mi00LjIyN0EyLjI0NywyLjI0NywwLDAsMSw3LjE4Nyw4LjI3M2E1My40NTEsNTMuNDUxLDAsMCwxLDYuODc2LS4zNjIsNTEuNDI5LDUxLjQyOSwwLDAsMSw2Ljg3Ni4zNzYsMi4yLDIuMiwwLDAsMSwxLjU0OSwxLjU0OUEyMi4wMjYsMjIuMDI2LDAsMCwxLDIyLjg1LDE0LjA3N1ptMCwwIiBmaWxsPSIjNzI4MzljIi8+Cjwvc3ZnPgo="
                    alt="/"
                  />
                  <p className="vidBotText">21 Videos</p>
                </div>
              </div>
            </Link>
          </section>
        </section>
      </section>
    </div>
  );
}

export default VideoTut;
