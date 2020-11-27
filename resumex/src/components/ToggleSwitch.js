import React, { useState } from "react";
import "./ToggleSwitch.css";
import { findAll } from "highlight-words-core";
import { red } from "@material-ui/core/colors";
function ToggleSwitch(props) {
  const hiLightHardSkills  = props.hiLightHardSkills;
  const hiLightVitalSoftSkills = props.hiLightVitalSoftSkills
  const resume = props.resume
  const [isToggled, setIsToggled] = useState(false);
  const [searchWords, setSearchWords] = useState(hiLightHardSkills)
  
  
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
      color = "yellow"
    } else {
      color = "red"
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
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  {isToggled ? <h1>Hard Skills</h1> : <h1>Soft Skills</h1>}
    <h4 dangerouslySetInnerHTML={{ __html: highlightedText }}></h4>
    </>
  );
}
export default ToggleSwitch;
