import {useState, useEffect} from 'react';
import axios from 'axios';


export default function useJobPostings(countrySelected) {
  console.log("props from country", countrySelected)

  const [ jobPostings, setJobPosting ] = useState([]);
  const first = "css";
  const second = "java";
  const third = "javascript"
  useEffect(() => {
 
   
      axios.post("https://jooble.org/api/3b20f6ec-4561-4835-aa1d-9247156b228d", {
        "keywords": `${first}, ${second}, ${third}`,
        "page": "1"
     })
    
     .then(response => {
      console.log(response.data.jobs)
      // return response.data.jobs;
      setJobPosting(response.data.jobs)
    })
    // .then(setJobPosting);
  

  }, [])

  return { jobPostings };
}