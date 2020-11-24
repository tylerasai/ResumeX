import React, {useState} from "react";
import "./Main.css";

import useKeyWords from "../Hooks/KeyWords";
import pairMatch from "../Helpers/pairMatch";
import getScores from "../Helpers/getScores";
import compareText from "../Helpers/compareText"
import mammoth from "mammoth";
import DonutWithText from "../components/DonutWithText";
import BarChart from "../components/BarChart";


export default function Main() {
const [input, setInput] = useState("");
const [input1, setInput1] = useState("");
const [edit, setEdit] = useState([""])
const { keywords } = useKeyWords();

//vitalKeywords is an array with the same words of the database and jobposting
//for the vital keywords

const vitalKeywords = pairMatch(keywords, input)



//this a score of how many of the 
//vital keywords you have in your resume.
const firstScore = getScores(vitalKeywords,input1)


//resumeAndPosting is an array of the words 
//that repeat on the posting and repeat on the resume with a count of each

const resumeAndPosting = compareText(input1, input) 

// console.log("resumeandposting is: ", resumeAndPosting);
// console.log("show database keywords: ", keywords, "vitalKeywords: ", vitalKeywords)
// console.log("firstScore",firstScore);
//printarray

//Dummy for the donut
  //dummy for the barchart
  const hardSkillScore = 50;
  const softSkillScore = 70;
  const specificKeywords = 100;
  const skillsSum = hardSkillScore + softSkillScore +specificKeywords;
  const totalScore = 300;
  
  //Dummy variables for charts
  
  const match = Math.floor(skillsSum/totalScore * 100) ;
  const unmatch = 100 - match;


const onChange = function(event){
  setInput(event.target.value);
}
const onChange1 = function(event){
  setInput1(event.target.value);
}
const onClick = function () {
  setEdit(vitalKeywords)
}

const wordTextResume = function(buffer) {
  //reads the file from resume and changes it to text

  mammoth.extractRawText({arrayBuffer: buffer})
  .then(function(result){
      const text = result.value; // The raw text
      const messages = result.messages;
      setInput1(text);
    })
  .done();
}

const onChangeResume = function(event){
  //takes the file and reads the file from buffer of array
  
  const reader = new FileReader;
  const fileData = event.target.files[0];
  reader.onloadend = (event) => {
  wordTextResume(event.target.result);
  }; //triggers when the reader stops reading file

   reader.readAsArrayBuffer(fileData);
}

const wordTextJob = function(buffer) {
    //reads the file from job and changes it to text

  mammoth.extractRawText({arrayBuffer: buffer})
  .then(function(result){
      const text = result.value; // The raw text
      const messages = result.messages;
      setInput(text);
    })
  .done();
}

const onChangeJob = function(event){
  //takes the file and reads the file from buffer of array
  const reader = new FileReader;
  const fileData = event.target.files[0];
  reader.onloadend = (event) => {
  wordTextJob(event.target.result);
  }; //triggers when the reader stops reading file

   reader.readAsArrayBuffer(fileData);
}



  return (
    <>
    <div class="whole-main">
       <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">About ResumeX</h1>
          <p class="jumbotron--lead ">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </section>
      <section className="input">
        <form id="main_form">
          <div class="job-area">
          <textarea
            className="textarea"
            name="job_description"
            placeholder="Paste Your Job Description Here"
            value={input}
            onChange={onChange}
         
         ></textarea>
         
          </div>
          <div class="resume-area">
          <textarea
            className="textarea"
            name="resume"
            placeholder="Paste Your Resume Here"
            value={input1}
            onChange={onChange1}
          ></textarea>
         
            </div>
        </form>
      </section>

      <div class="upload-tag">
      <form class="job-upload" >
        <input type="file" id="myFile" name="filename" onChange={onChangeJob}></input>
         
      </form> 
      
      <form class="resume-upload" >
        <input type="file" id="myFile" name="filename" onChange={onChangeResume}></input>
         
      </form> 
      </div>

      <button type="submit" form="main_form" value="Submit" className="main_button" onClick={onClick}>Submit</button>
       {/* <h4>{edit}</h4> */}
        <h4>{vitalKeywords}</h4>
      
      

    </div>
    <div className="results_container">
      <DonutWithText match={match} unmatch={unmatch} />
      
      <div className="bars_container">
      <span>Primary Key Words</span>
      <BarChart score={hardSkillScore} />
      <span>Soft Skills Match</span>
      <BarChart score={softSkillScore} />
      <span>Posting Specific Keywords Match</span>
      <BarChart score={specificKeywords} />
      </div>
      </div>
    </>
  );
}
