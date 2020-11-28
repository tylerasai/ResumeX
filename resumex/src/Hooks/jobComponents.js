import {useState, useEffect} from 'react';
import axios from 'axios';


export default function useJobPostings(keywords, location) {


  const [ jobPostings, setJobPosting ] = useState([]);

 
  useEffect(() => {
 
   
      axios.post("https://jooble.org/api/d82cf18f-efe3-466b-bdf9-2cc38d167951", {
        "keywords": keywords,
        "location": location,
        "page": "1"
     })
    
     .then(response => {
      console.log(response.data.jobs)
      // return response.data.jobs;
      setJobPosting(response.data.jobs)
    })
    // .then(setJobPosting);
  

  }, [keywords, location])

  return { jobPostings };
}