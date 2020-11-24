import React, { useState } from "react";
import "./Main.css";
import useKeyWords from "./Hooks/KeyWords";
import pairMatch from "./Helpers/pairMatch";
import DonutWithText from "./components/DonutWithText";
import BarChart from "./components/BarChart";

export default function Main() {
  const [input, setInput] = useState("");
  const [input1, setInput1] = useState("");
  const [edit, setEdit] = useState([""]);
  const { keywords } = useKeyWords();

  const newText = pairMatch(keywords, input);
  //printarray

  console.log("show input: ", input, "newtext is: ", newText);

  const onChange = function (event) {
    setInput(event.target.value);
  };
  const onChange1 = function (event) {
    setInput1(event.target.value);
  };
  const onClick = function () {
    setEdit(newText);
  };


  //Dummy for the donut
  //dummy for the barchart
  const hardSkillScore = 80;
  const softSkillScore = 100;
  const specificKeywords = 100;
  const skillsSum = hardSkillScore + softSkillScore +specificKeywords;
  const totalScore = 300;
  
  //Dummy variables for charts
  
  const match = Math.floor(skillsSum/totalScore * 100) ;
  const unmatch = 100 - match;


  return (
    <>
    <div class="whole-main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">About ResumeX</h1>
          <p class="jumbotron--lead ">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </p>
          <p>
            <a href="#" class="btn btn-primary my-2">
              Main call to action
            </a>
            <a href="#" class="btn btn-secondary my-2">
              Secondary action
            </a>
          </p>
        </div>
      </section>
      <section className="input">
        <form id="main_form">
          <textarea
            className="textarea"
            name="job_description"
            placeholder="Paste Your Job Description Here"
            value={input}
            onChange={onChange}
          ></textarea>
          <textarea
            className="textarea"
            name="resume"
            placeholder="Paste Your Resume Here"
            value={input1}
            onChange={onChange1}
          ></textarea>
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
      <h4>{edit}</h4>
      {/* <h4>{newText}</h4> */}


      
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
