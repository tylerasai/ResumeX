import {useState, useEffect} from 'react';


export default function useKeyWords() {

  const [ keywords, setKeywords ] = useState([]);

  useEffect(() => {
    fetch('/api/keywords')
    .then(response => response.json())
    .then(setKeywords);
  },[])
  

    return { keywords };
}
