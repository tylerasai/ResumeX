import React from "react";
import {useLocation} from 'react-router-dom';

import './jobPosting.css'
import moment from 'moment';



const JobPage = (props) => {


const location = useLocation();

const jobPostings = location.data.jobPostings;

const listJobs = jobPostings.map( (jobPosting) => {
    return (
      <div id="job-container">
      <article class="job-container" >
          <div class="items-inside">
              <div>
              <a href={jobPosting.link}><h3>{jobPosting.title}</h3></a>
              </div>
              <div>
              <i href="#icon-bag"></i>
              <h5>{jobPosting.company}</h5>
              </div>
              <div >
              <p dangerouslySetInnerHTML={{ __html: jobPosting.snippet }}></p>
              </div>
              <div>
              <p>{jobPosting.location}</p>
              </div>
              <div>
              Posted {moment(new Date(jobPosting.updated)).fromNow()}
              </div>
          </div>
  
      </article>
    </div>
  )
}

)
// console.log("job posting:", jobPostings);
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
    <section class="section-services1">
      <div class="container1">
        <div class="row1 justify-content-center text-center">
          <div class="col-md-10 col-lg-8">
            <div class="header-section">
              <h2 class="title"> <a href="/main">Resume<span>X</span></a>
                
              </h2>
              <p class="description1">Your Tech Job Expert!</p>
              <h5>You can see job listings matching your resume below.</h5>
              <a href="/main"> <button className="go_back_resume" type="submit" class="btn btn-primary" >Go Back to Main Page</button></a>
            </div>
          </div>
        </div>
      </div>
      </section>
  </body>
  
  <div className="listing_container">
  
    <div className="job_listing">{listJobs}</div>
  </div>
 
</html>
  )
};

export default JobPage;
