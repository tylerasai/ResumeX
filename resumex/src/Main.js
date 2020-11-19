import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div>
      <section className="input">
        <form id="main_form">
          <textarea
            className="textarea"
            name="job_description"
            placeholder="Paste Your Job Description Here"
          ></textarea>
          <textarea
            className="textarea"
            name="resume"
            placeholder="Paste Your Resume Here"
          ></textarea>
        </form>
      </section>
        <button type="submit" form="main_form" value="Submit" className="main_button">Submit</button>
    </div>
  );
}
