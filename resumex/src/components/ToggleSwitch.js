import React, { useState } from "react";
import "./ToggleSwitch.css";
import { findAll } from "highlight-words-core";
function ToggleSwitch(props) {
  const hiLightHardSkills  = props.hiLightHardSkills;
  const hiLightVitalSoftSkills = props.hiLightVitalSoftSkills
  const resume = props.resume
  const [isToggled, setIsToggled] = useState(false);
  const [searchWords, setSearchWords] = useState(hiLightVitalSoftSkills)
  
  
  const onToggle = function (event) {
    setIsToggled(!isToggled);
    if(isToggled) {
      setSearchWords(hiLightVitalSoftSkills)
    } else {
      setSearchWords(hiLightHardSkills)
    }
   
  };
  
  
  const textToHighlight = resume
  const chunks = findAll({
    searchWords,
    textToHighlight,
  });
  
  const highlightedText = chunks
  .map((chunk) => {
    const { end, highlight, start } = chunk;
    const text = textToHighlight.substr(start, end - start);
    let color = ""
    if(isToggled) {
      color = "#43abc9"
    } else {
      color = "#f26d21"
    }
    if (highlight) {
      
      return `<mark style = "background-color: ${color}">${text}</mark>`;
    } else {
          
      return text;
    }
  })
  .join("");
  
  return (
    <>
  {isToggled ? <h3>Hard Skills</h3> : <h3>Soft Skills</h3>} 
      <p className="description">Toggle between the hard and soft skill keywords</p><br></br>
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} /> 

      <span className="switch" />
    </label>
    <hr></hr>
    <p dangerouslySetInnerHTML={{ __html: highlightedText }}></p>
    
    </>
  );
}
export default ToggleSwitch;
