import {useState, useEffect} from 'react';


export default function useKeyWords() {

  const [ keywords, setKeywords ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/api/keywords')
    .then(response => response.json())
    .then(setKeywords);
  },[])
  

    return { keywords };
}
