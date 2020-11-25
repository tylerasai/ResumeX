import React, { useState } from "react";


import "./Main.css";
import useKeyWords from "../Hooks/KeyWords";
import useSoftSkills from "../Hooks/SoftSkills";
import pairMatch from "../Helpers/pairMatch";
import getScores from "../Helpers/getScores";
import compareText from "../Helpers/compareText"
import {extractWordsOnly} from "../Helpers/extrahelp";
import mammoth from "mammoth";
import DonutWithText from "../components/DonutWithText";
import BarChart from "../components/BarChart";
import document_logo from "../assets/img/document_logo.svg";
import { findAll } from "highlight-words-core";
import Table from "../components/Table";
import { first } from "underscore";


export default function Main() {
const [jobPosting, setJobposting] = useState("");
const [resume, setResume] = useState("");
const [edit, setEdit] = useState([""]);
const [PrimaryScore, setPrimaryScore] = useState([""]);
const [resumeAndPostingComp, setResumeAndPosting] = useState([""]);
const [highlightWords, setHighlightWords] = useState([""]);


const { keywords } = useKeyWords();
const { softskills } = useSoftSkills();



//vitalKeywords is an array with the same words of the database and jobposting
//for the vital keywords



const vitalKeywords = pairMatch(keywords, jobPosting)
const vitalSoftSkills = pairMatch(softskills, jobPosting);
console.log("vitalsoftskills:", vitalSoftSkills);

// 


//this a score of how many of the 
//vital keywords you have in your resume.
const firstScore = getScores(vitalKeywords,resume);
const secondScore = getScores(vitalSoftSkills, resume);

//resumeAndPosting is an array of the words 
//that repeat on the posting and repeat on the resume with a count of each

// const resumeAndPosting = compareText(resume, jobPosting) 


// const vitalKeywords = pairMatch(keywords, jobPosting)

// const firstScore = getScores(vitalKeywords,resume)

// const resumeAndPosting = compareText(resume, jobPosting) 


const textToHighlight = resume
const searchWords = highlightWords
const chunks = findAll({
  searchWords,
  textToHighlight
});






const resumeAndPosting = compareText(resume, jobPosting) 

console.log("resumeandposting is: ", resumeAndPosting);
// console.log("show database keywords: ", keywords, "vitalKeywords: ", vitalKeywords)
//printarray

console.log("FIRST SCORE:", firstScore);
console.log("SECOND SCORE", secondScore);

 
  //dummy for the barchart   
  const hardSkillScore = firstScore;   
  const softSkillScore =  secondScore;   
  const specificKeywords = 100;   
  const skillsSum = hardSkillScore + softSkillScore + specificKeywords;   
  const totalScore = 300;      
  //Dummy variables for charts      
  const match = (skillsSum/totalScore * 100).toFixed(2);   
  const unmatch = 100 - match;
  //Dummy variables for charts

const onChange = function(event){
  setJobposting(event.target.value);
}
const onChange1 = function(event){
  setResume(event.target.value);
}
const onClick = function (event) {
  event.preventDefault(); 
  //set state on the vitalKeywords, firstScore, resumeandPosting
 setEdit(vitalKeywords)
 setPrimaryScore(hardSkillScore)
 setResumeAndPosting(resumeAndPosting)
 setHighlightWords(extractWordsOnly(vitalKeywords)) 
 // console.log("resumeandposting is: ", resumeAndPosting);
  // console.log("show database keywords: ", keywords, "vitalKeywords: ", vitalKeywords)
  // console.log("firstScore",firstScore);
}

const wordTextResume = function(buffer) {
  //reads the file from resume and changes it to text

  mammoth.extractRawText({arrayBuffer: buffer})
  .then(function(result){
      const text = result.value; // The raw text
      const messages = result.messages;
      setResume(text);
    })
  .done();
}

const onChangeResume = function(event){
  //takes the file and reads the file from buffer of array
  
  const reader = new FileReader();
  const fileData = event.target.files[0];
  reader.onloadend = (event) => {
  wordTextResume(event.target.result);
  }; //triggers when the reader stops reading file

   reader.readAsArrayBuffer(fileData);
}




  const wordTextJob = function (buffer) {
    //reads the file from job and changes it to text

    mammoth
      .extractRawText({ arrayBuffer: buffer })
      .then(function (result) {
        const text = result.value; // The raw text
        setJobposting(text);
      })
      .done();
  };

  const onChangeJob = function (event) {
    //takes the file and reads the file from buffer of array
    const reader = new FileReader();
    const fileData = event.target.files[0];
    reader.onloadend = (event) => {
      wordTextJob(event.target.result);
    }; //triggers when the reader stops reading file

    reader.readAsArrayBuffer(fileData);
  };

  const highlightedText = chunks
  .map(chunk => {
    const { end, highlight, start } = chunk;
    const text = textToHighlight.substr(start, end - start);
    console.log("text",text)
    console.log("highlight", highlight)
    if (highlight) {
      return `<mark style="background-color: yellow">${text}</mark>`;
    } else {
      
      return text;
      
    }
  })
  .join("");

  return (
    <>
      <div class="whole-main">
        <section class="jumbotron text-center">
          

          <div class="container">
            <h1 class="jumbotron-heading">ResumeX : Tech Resume Expert</h1>
          </div>

          <div className="logo_container">
            <img src={document_logo}></img>
          </div>

        </section>
        <section className="input">
          <form id="main_form">
            <div class="job-area">
              <textarea className="textarea" name="job_description" placeholder="Paste Your Job Description Here" value={jobPosting} onChange={onChange}></textarea>
              <form class="job-upload">
              <input type="file" id="myFile" name="filename" onChange={onChangeJob}></input>
              </form>
            </div>
            <div class="resume-area">
              <textarea className="textarea" name="resume" placeholder="Paste Your Resume Here" value={resume} onChange={onChange1}></textarea>
              <form class="resume-upload">
              <input type="file" id="myFile" name="filename" onChange={onChangeResume}></input>
              </form>
            </div>
          </form>
        </section>
        

        <button
          type="submit"
          form="main_form"
          value="Submit"
          className="main_button"
          onClick={onClick}
        >
          Submit
        </button>
        {/* <h4>{edit}</h4> */}
        <h4>{resumeAndPostingComp}</h4>
      </div>
      <h1 className="overview">Summary</h1>
      <div className="results_container">
        <DonutWithText match={match} unmatch={unmatch} />

        <div className="bars_container">
          <span>Primary Key Words</span>
          <BarChart score={PrimaryScore} />
          <span>Soft Skills Match</span>
          <BarChart score={secondScore} />
          <span>Posting Specific Keywords Match</span>
          <BarChart score={specificKeywords} />
        </div>
      </div>
      
  <div dangerouslySetInnerHTML = {{__html:highlightedText}}></div>  
    </>
        
  );
}
