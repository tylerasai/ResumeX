import {useState, useEffect} from 'react';
import axios from 'axios';


export default function useJobPostings(keywords, location) {


  const [ jobPostings, setJobPosting ] = useState([]);

 
  useEffect(() => {
 
   
      axios.post("/api/jobs", {
        "keywords": keywords,
        "location": location,
        "page": "1"
     })
    
     .then(response => {
      // return response.data.jobs;
      setJobPosting(response.data)
    })
    // .then(setJobPosting);
  

  }, [keywords, location])

  return { jobPostings };
}