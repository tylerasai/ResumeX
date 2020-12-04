import React from "react";
import "./home.css";
import flowchart from "../assets/img/flowchart.png";





// import useVisualMode from "../Hooks/useVisualMode"

export default function Home(props) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.css"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:500,700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <section class="section-services">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-md-10 col-lg-8">
                <div class="header-section">
                  <h2 class="title"> <a href="/main">Resume<span>X</span></a>
                    
                  </h2>
                  <p class="description">Your Tech Job Expert.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home_image">
            <img src={flowchart}></img>
					
						
						<div class="header-section">
                  <h2 class="title"> <a href="/main">Enter_Resume<span>X</span></a>
                    
                  </h2>
                </div>


          </div>
        </section>
      </body>
    </html>
  );
}
