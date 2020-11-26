import React from 'react';
import './jobPosting.css'
import useJobPostings from '../Hooks/jobComponents';
import moment from 'moment';



const JobPage = () => {
    // const jobPosting = {
    //     company: "COFOMO",
    //     id: -8166745649413341000,
    //     link: "https://jooble.org/desc/-8166745649413340676?ckey=react&rgn=55130&pos=1&elckey=7174711399690265871&p=1&aq=21818685&age=39&relb=126&brelb=115&bscr=4422.6196&scr=4845.652779130435",
    //     location: "Canada",
    //     salary: "",
    //     snippet: "&nbsp;...lauréate du concours Les Sociétés les mieux gérées au Canada de 2020! Vous avez un profil convaincant de Développeur lead fullstack <b>React/</b>Java? Un de nos clients à Montréal a besoin de votre expertise. Votre succès professionnel nous tient à cœur et nous espérons vous avoir...&nbsp;",
    //     source: "appcast.io",
    //     title: "Développeur lead React",
    //     type: "",
    //     updated: "2020-11-25T00:00:00.0000000"
    // }
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
              <p>{jobPosting.snippet}</p>
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
  <div>{listJobs}</div>
  )
};

export default JobPage;
