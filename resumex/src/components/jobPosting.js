import React from 'react';
import './jobPosting.css'
import useJobPostings from '../Hooks/jobComponents';
import moment from 'moment';



const JobPage = () => {
const {jobPostings} = useJobPostings();
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
              <div>
              <p dangerouslySetInnerHTML = {{__html:jobPosting.snippet}}></p>
              </div>
              <div>
              <p>{jobPosting.location}</p>
              </div>
              <div>
              Posted {moment(new Date(jobPosting.updated)).fromNow()}
              {/* <p>{jobPosting.updated}</p> */}
              </div>
          </div>
  
      </article>
    </div>
  )
}

)
console.log("job posting:", jobPostings);
  return (
  <div>{listJobs}</div>
  )
};

export default JobPage;
