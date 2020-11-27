import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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

import ResultTable from "./ResultTable";
import ToggleSwitch from "../components/ToggleSwitch";
import useJobPostings from "../Hooks/jobComponents";

import {
  getJobSpecificResume,
  getJobSpecificPosting,
} from "../Helpers/getJobSpecificWords";

export default function Main() {
  const [jobPosting, setJobposting] = useState("");
  const [resume, setResume] = useState("");
  const [edit, setEdit] = useState([""]);
  const [PrimaryScore, setPrimaryScore] = useState([""]);

  const [hiLightHardSkills, setHiLightHardSkills] = useState([""]);

  const [hiLightVitalSoftSkills, setHiLightVitalSoftSkills] = useState([""]);
  const [submitState, setSubmitState] = useState(false);

  const { keywords } = useKeyWords();
  const { softskills } = useSoftSkills();
  
  const history = useHistory();

  //Cick job search - calling

  //vitalKeywords is an array with the same words of the database and jobposting
  //for hardskills

  const vitalKeywords = pairMatch(keywords, jobPosting);

  //vitalSoftSkills is an array with the same words in the database and jobposting for
  //soft skills

  const vitalSoftSkills = pairMatch(softskills, jobPosting);

  //jobspecific words is words that repeats most in the job posting
  const jobRepeatPosting = getJobSpecificPosting(
    jobPosting,
    vitalKeywords,
    vitalSoftSkills
  );
  const jobRepeatResume = getJobSpecificResume(resume, jobPosting);

  //firstScore and Second score is for the bargraph to rank how many of the keywords for
  //hardskills and softskills you got

  const firstScore = getScores(vitalKeywords, resume);
  const secondScore = getScores(vitalSoftSkills, resume);

  //resumeAndPosting is an array of the words
  //that repeat on the posting and repeat on the resume with a count of each

  const resumeRepeatFromPosting = pairMatch(keywords, resume);
  const resumeRepeatSoftSkillsPosting = pairMatch(softskills, resume);

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
  const hardSkillTitle = "Hard Skills";
  const softSkillTitle = "Soft Skills";
  const jobSpecificTitle = "Job Specific Skills";

  const onChange = function (event) {
    setJobposting(event.target.value);
  };
  const onChange1 = function (event) {
    setResume(event.target.value);
  };
  const onClick = function (event) {
    event.preventDefault();

    setEdit(vitalKeywords, vitalSoftSkills);
    setPrimaryScore(hardSkillScore);

    setHiLightHardSkills(extractWordsOnly(vitalKeywords));
    setHiLightVitalSoftSkills(extractWordsOnly(vitalSoftSkills));
    setSubmitState(true)
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

  //Job Search component
  const jobSearchKeyword = extractWordsOnly(resumeRepeatFromPosting)
    .slice(0, 5)
    .toString();

  console.log("JOB SEARCH KEYWORDS", jobSearchKeyword);

  const [countrySelected, setCountrySelected] = useState("");

  const onClick_JobSearch = function (event) {
    // event.preventDefault();
    //set state on the vitalKeywords, firstScore, resumeandPosting
    setCountrySelected(event.target.value);
  };

  const usePrintJobPosting = useJobPostings(jobSearchKeyword, countrySelected);
  console.log("USER PRINT JOB POSTING", usePrintJobPosting);

  const moveToJobSearch = () => {
    history.push({ pathname: "/job-search", data: usePrintJobPosting });
  };

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
      </div>
      <h1 className="overview">Summary</h1>
      <br></br>
      {submitState ? <div>
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

      <div className="table_highlight_container">
        <div className="result_table_container">
          <ResultTable
            vitalKeywords={vitalKeywords}
            resumeRepeatFromPosting={resumeRepeatFromPosting}
            title={hardSkillTitle}
            />
          <ResultTable
            vitalKeywords={vitalSoftSkills}
            resumeRepeatFromPosting={resumeRepeatSoftSkillsPosting}
            title={softSkillTitle}
            />
          <ResultTable
            vitalKeywords={jobRepeatPosting}
            resumeRepeatFromPosting={jobRepeatResume}
            title={jobSpecificTitle}
            />
        </div>

        <div className="highlight_toggle">
          <div>
            <ToggleSwitch
              hiLightHardSkills={hiLightHardSkills}
              hiLightVitalSoftSkills={hiLightVitalSoftSkills}
              resume={resume}
              />
          </div>

          <div className="job_search_button">
            <button onClick={moveToJobSearch}>Job Search</button>

            <select onChange={onClick_JobSearch}>
              <option value="">
              </option>

              <option value="usa">
                USA
              </option>
              <option value="canada">Canada</option>
              <option value="uk">UK</option>
            </select>
          </div>
        
        </div>
      
      </div>
              </div> : <div>Please input resume and job posting</div>}
    
    </>
  );
}
