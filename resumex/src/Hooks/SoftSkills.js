import {useState, useEffect} from 'react';


export default function useSoftSkills() {

  const [ softskills, setSoftskills ] = useState([]);

  useEffect(() => {
    fetch('/api/softskills')
    .then(response => response.json())
    .then(setSoftskills);
  },[])
  

    return { softskills };
}
