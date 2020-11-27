import React, { useState } from "react";
import {useLocation} from 'react-router-dom';

import './jobPosting.css'
import useJobPostings from '../Hooks/jobComponents';
import moment from 'moment';



const JobPage = (props) => {


const location = useLocation();
console.log("PROPS DOT LOCATION",location.data);

const jobPostings = location.data.jobPostings;
console.log(jobPostings);

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
  <div className="listing_container">
    <div className="go_back_resume"><a href="/main">Go Back to Main Page</a></div>
    <div className="job_listing">{listJobs}</div>
  </div>
  )
};

export default JobPage;
