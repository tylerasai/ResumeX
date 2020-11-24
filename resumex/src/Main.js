import React, {useState} from "react";
import "./Main.css";
import useKeyWords from "./Hooks/KeyWords";

import pairMatch from "./Helpers/pairMatch";
import getScores from "./Helpers/getScores";

import compareText from "./Helpers/compareText"


const fakeArray = [
  {
    id: 1,
    keyword: "safety"
  },
  {
    id: 2,
    keyword: "analytics"
  },
  {
    id: 3,
    keyword: "frameworks"
  },
  {
    id: 4,
    keyword: "datasets"
  },
  {
    id: 5,
    keyword: "design"
  },
  {
    id: 6,
    keyword: "java"
  },
  {
    id: 7,
    keyword: "ruby on rails"
  },
  {
    id: 8,
    keyword: "architecture"
  },

  {
    id: 9,
    keyword: "big data"
  },

  {
    id: 10,
    keyword: "business intelligence"
  },

  {
    id: 11,
    keyword: "Sher"
  },

  {
    id: 12,
    keyword: "Tyler"
  },

  {
    id: 13,
    keyword: "Jay"
  },
]

const jobPosting = `Blackline Safety is looking for a Visualization and Frontend Developer to help build and drive our Blackline Analytics and Blackline Vision platform. We have a world class connected safety system and we are building a data, analytics, and data science platform to match it.

Who are you?

You believe big data helps businesses solve real-world problems. You are skilled at data visualization techniques and frameworks. You are not bound to a single tool or platform, and can solve problems in creative ways. You trust in data driven problem solving and believe visualizing large datasets is a necessity to achieve that. You like to explore datasets to find insights that nobody else sees. You can communicate these ideas through visualizations. You are self-motivated, creative and excited to find answers to questions that the answer might not be obvious without going through large amounts of data.

What will you do?

You will be responsible for developing custom visualizations that are designed by our Visualization Designers for our Blackline Analytics, and Blackline Vision platforms. You will be involved in building interactive visualizations that will be used by our marketing, business intelligence, and data science teams as well as our end users. These projects will include both web development, and visualization development in the Power platform – Power BI, Power Flow, Power Apps.

Your job will include everything from collaborating with our designers, building high fidelity proof of concepts, and production ready scalable products. Your contribution will help us increase internal efficiencies and evolve our products and services by leveraging large and diverse datasets generated by customers from around the world.

About Blackline

Blackline Safety is a world leader in the development and manufacturing of wirelessly connected safety products — we offer the broadest and most complete portfolio in the industry. We monitor personnel working alone in populated areas, indoors within complex facilities, and employees operating in the most remote reaches of our planet. Our products are used to keep people safe in the event of falls, missed check-ins, man-downs and exposure to explosive or toxic gas. Our products save lives. Our design, marketing, customer care, sales and production are all performed in-house at our headquarters in Calgary, AB. Blackline Safety is a publicly-traded company (TSXV: BLN). Blackline Safety’s headquarters are located in an historic building in Ramsay. We have a robust COVID protocol, with employees working both in the office and remotely.

Requirements:

Post-secondary degree (Computer Science, Human-Computer Interaction, Information Visualization, Analytics, Computer Graphics, Mathematics, Physics, Information Technology, Computational Media Design, or related)
5 years of visualization development experience (Including academia and personal projects)
3 years of experience with React.js
3 years of experience with D3.js
3 years of experience with Node.js (For building Power BI custom visuals)
Strong communication skills in written, spoken, and visualization mediums.
Experience working with technical and design teams
Comfortable working in an iterative process
Comfort troubleshooting and fixing performance issues related to visualization delivery
Preferred: Previously built and deployed visualizations with a major tool such as PowerBI, Tableau, Qlik or Spotfire
Optional:

Experience with development and deployment of Power BI widgets,
Experience working in research and exploration-oriented teams,
Experience with CSS, Web applications, and HTML would be considered an asset
Experience with DAX and M would be considered an asset,
Experience with SQL and structured database systems would be considered an asset,
Experience with Python would be considered an asset.
Experience with version control.
Blackline Safety offers:

An exciting high-growth environment
An experienced, dynamic and motivated team
Supportive, challenging and collaborative work
Competitive salary and vacation
Medical, dental and drug benefits
Company stock purchase plan with matching contributions
Our clients depend on Blackline Safety to monitor the wellbeing of their employees at work — you can help to make a difference. Come work with Blackline Safety in an exciting, fast-paced work environment.. java React , ruby on rails Strong JS skills, react skills ruby on rails react particularly with es6, React, Vue, Angular, Express, Node Experience with with various PHP frameworks/CMS like Laravel, Drupal, and WordPress Experience with Java and Java based technologies and frameworks (Spring, Hibernate) Experience designing RESTful API Experience with microservices architecture Proficiency with relational databases and NoSQL databases. (MySQL, MongoDB, Couchbase, DynamoDB, PostgreSQL) Knowledge of version control systems and continuous integration systems (Git, Bitbucket, Jenkins, Travis CI). Proven experience in agile/scrum methodologies Experience with CloudComputing and Serverless Architecture. (AWS, GCP, Azure) Solid analytical, problem solving and decision-making skills Excellent written documentation and client-facing presentation skills Understanding of software architectural patterns Unit and automated testing Continuous deployment process and infrastructure management Analytics, data analysis, reporting@`;

const fakeResume = `I know ruby on rails . big data I love business intelligence. Analystics is awesome. I hate java. I am good at analytics. I have experience in design and architecture. business intelligence`;



export default function Main() {
const [input, setInput] = useState("");
const [input1, setInput1] = useState("");
const [edit, setEdit] = useState([""])
const { keywords } = useKeyWords();

//newText is an array with the same words of the database and jobposting
//for the vital keywords

const vitalKeywords = pairMatch(keywords, input)



//this a score of how many of the 
//vital keywords you have in your resume.
const firstScore = getScores(vitalKeywords,input1)


//resumeAndPosting is an array of the words 
//that repeat on the posting and repeat on the resume with a count of each

const resumeAndPosting = compareText(input1, input) 



console.log("resumeandposting is: ", resumeAndPosting);
console.log("show database keywords: ", keywords, "vitalKeywords: ", vitalKeywords)
console.log("firstScore",firstScore)

const onChange = function(event){
  setInput(event.target.value);
}
const onChange1 = function(event){
  setInput1(event.target.value);
}
const onClick = function () {
  setEdit(vitalKeywords)
}

  return (
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
        <button type="submit" form="main_form" value="Submit" className="main_button" onClick={onClick}>Submit</button>
       <h4>{edit}</h4>
        {/* <h4>{newText}</h4> */}
        {/* <h4>{resumeAndPosting}</h4> */}
      

    </div>
  );
}

