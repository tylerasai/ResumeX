import {useState, useEffect} from 'react';


export default function useSoftSkills() {

  const [ softskills, setSoftskills ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/api/softskills')
    .then(response => response.json())
    .then(setSoftskills);
  },[])
  

    return { softskills };
}
