import React, { useState } from "react";

import './jobPosting.css'
import useJobPostings from '../Hooks/jobComponents';
import moment from 'moment';



const JobPage = () => {

    const [countrySelected, setCountrySelected] = useState("");
    
    const onClick = function (event) {
        // event.preventDefault();
        //set state on the vitalKeywords, firstScore, resumeandPosting
        setCountrySelected(event.target.value)

    };
const {jobPostings} = useJobPostings(countrySelected);
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
console.log("job posting:", jobPostings);
  return (
      <div>
  <select onChange={onClick}>
  <option value="usa">USA</option>
  <option value="canada">Canada</option>
  <option value="uk">UK</option>
</select>
  <div>{listJobs}</div>
  </div>
  )
};

export default JobPage;
