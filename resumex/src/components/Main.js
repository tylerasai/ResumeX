import React, { useState } from "react";

import "./Main.css";
import useKeyWords from "../Hooks/KeyWords";
import useSoftSkills from "../Hooks/SoftSkills";
import pairMatch from "../Helpers/pairMatch";
import getScores from "../Helpers/getScores";

import { extractWordsOnly } from "../Helpers/extrahelp";
import mammoth from "mammoth";
import DonutWithText from "../components/DonutWithText";
import BarChart from "../components/BarChart";
import document_logo from "../assets/img/document_logo.svg";
import { findAll } from "highlight-words-core";
import ResultTable from "./ResultTable";


export default function Main() {
  const [jobPosting, setJobposting] = useState("");
  const [resume, setResume] = useState("");
  const [edit, setEdit] = useState([""]);
  const [PrimaryScore, setPrimaryScore] = useState([""]);
  const [resumeAndPostingComp, setResumeAndPosting] = useState([""]);
  const [hiLightHardSkills, setHiLightHardSkills] = useState([""]);
  const [resumeLoaded, setResumeLoaded] = useState(false);
  const [hiLightVitalSoftSkills, setHiLightVitalSoftSkills] = useState([""]);
  const { keywords } = useKeyWords();
  const { softskills } = useSoftSkills();

  //vitalKeywords is an array with the same words of the database and jobposting
  //for hardskills
  
  const vitalKeywords = pairMatch(keywords, jobPosting);
  
  //vitalSoftSkills is an array with the same words in the database and jobposting for 
  //soft skills
  
  const vitalSoftSkills = pairMatch(softskills, jobPosting);
  
  //
  
  
  const firstScore = getScores(vitalKeywords, resume);
  const secondScore = getScores(vitalSoftSkills, resume);
  
  //resumeAndPosting is an array of the words
  //that repeat on the posting and repeat on the resume with a count of each
  
  

  
  
  const resumeRepeatFromPosting = pairMatch(keywords, resume);
  const resumeRepeatSoftSkillsPosting = pairMatch(softskills, resume);
  
  const textToHighlight = resume;

  const searchWords = hiLightVitalSoftSkills.concat(hiLightHardSkills);
  const chunks = findAll({
    searchWords,
    textToHighlight,
  });

  const highlightedText = chunks
  .map((chunk) => {
    const { end, highlight, start } = chunk;
    const text = textToHighlight.substr(start, end - start);
    if (highlight) {
      return `<mark style = "background-color: red">${text}</mark>`;
    } else {
      return text;
    }
  })
  .join("");




  //dummy for the barchart
  const hardSkillScore = firstScore;
  const softSkillScore = secondScore;
  const specificKeywords = 100;
  const skillsSum = hardSkillScore + softSkillScore + specificKeywords;
  const totalScore = 300;
  //Dummy variables for charts
  const match = ((skillsSum / totalScore) * 100).toFixed(2);
  const unmatch = 100 - match;
  //Dummy variables for charts

  
//Titles for the table
const hardSkillTitle = "Hard Skills"
const softSkillTitle = "Soft Skills"



  const onChange = function (event) {
    setJobposting(event.target.value);
  };
  const onChange1 = function (event) {
    setResume(event.target.value);
    setResumeLoaded(true);
  };
  const onClick = function (event) {
    event.preventDefault();
    //set state on the vitalKeywords, firstScore, resumeandPosting
    setEdit(vitalKeywords, vitalSoftSkills);
    setPrimaryScore(hardSkillScore);
    // setResumeAndPosting(resumeAndPosting);
    setHiLightHardSkills(extractWordsOnly(vitalKeywords));
    setHiLightVitalSoftSkills(extractWordsOnly(vitalSoftSkills));
    // console.log("resumeandposting is: ", resumeAndPosting);
    // console.log("show database keywords: ", keywords, "vitalKeywords: ", vitalKeywords)
    // console.log("firstScore",firstScore);
  };

  const wordTextResume = function (buffer) {
    //reads the file from resume and changes it to text

    mammoth
      .extractRawText({ arrayBuffer: buffer })
      .then(function (result) {
        const text = result.value; // The raw text
        const messages = result.messages;
        setResume(text);
      })
      .done();
  };

  const onChangeResume = function (event) {
    //takes the file and reads the file from buffer of array

    const reader = new FileReader();
    const fileData = event.target.files[0];
    reader.onloadend = (event) => {
      wordTextResume(event.target.result);
    }; //triggers when the reader stops reading file

    reader.readAsArrayBuffer(fileData);
  };

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


  
  // const Example = () => {
  //   const [value, setValue] = useState("Here's a blueberry. There's a strawberry. Surprise, it's a banananana! <h1>hello</h1>");
  //   const highlight = [
      
  //       {
  //         highlight: 'strawberry',
  //         className: 'red'
  //       },
  //       {
  //         highlight: 'blueberry',
  //         className: 'blue'
  //       },
  //       {
  //         highlight: /ba(na)*/gi,
  //         className: 'yellow'
  //       }
  //   ]
  //   return (
  //     <HighlightWithinTextarea 
  //       value={value}
  //       highlight={highlight}
  //       onChange= {event => setValue(event.target.value)}
        
  //     />
  //   );
  // };
  

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
              <textarea
                className="textarea"
                name="job_description"
                placeholder="Paste Your Job Description Here"
                value={jobPosting}
                onChange={onChange}
              ></textarea>
              <form class="job-upload">
                <input
                  type="file"
                  id="myFile"
                  name="filename"
                  onChange={onChangeJob}
                ></input>
              </form>
            </div>
            <div class="resume-area">
              <textarea
                className="textarea"
                name="resume"
                placeholder="Paste Your Resume Here"
                value={resume}
                onChange={onChange1}
              ></textarea>
              <form class="resume-upload">
                <input
                  type="file"
                  id="myFile"
                  name="filename"
                  onChange={onChangeResume}
                ></input>
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
        <h1>Hardskill Keywords</h1>
        <h4 dangerouslySetInnerHTML={{ __html: highlightedText }}></h4>
      </div>
      <h1 className="overview">Summary</h1><br></br>
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

      <div className="result_table_container">
        <ResultTable 
        vitalKeywords={vitalKeywords}
        resumeRepeatFromPosting={resumeRepeatFromPosting}
        title={hardSkillTitle} />
        <ResultTable 
        vitalKeywords={vitalSoftSkills}
        resumeRepeatFromPosting={resumeRepeatSoftSkillsPosting}
        title={softSkillTitle} />
        <ResultTable 
        vitalKeywords={vitalKeywords}
        resumeRepeatFromPosting={resumeRepeatFromPosting} />
      </div>
    
      {/* <Example/> */}
      {/* <div dangerouslySetInnerHTML={{ __html: highlightedText }}></div> */}
    </>
  );
}


