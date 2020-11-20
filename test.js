const text =
  "/You4 Will! Have architecture An benchmarking Opportunity To Work as part of a cross-functional technology enabled services team to deliver high-quality web based systems Design and implement integrations between systems Define API specifications and create web services Create complex UI components and user flows Participate in business and technical discussions internally as well as externally with the clients Work with Project Managers and Business Analysts to propose technical solutions Communicate technical design alternatives, limitations and benefits Disseminate solutions and delegate tasks to developers Assist and coach the junior developers Who You Are Proven history of writing great code and completing complex software enhancements proficiently with a high level of quality 5+ years of relevant experience in software engineering. Strong JS skills, particularly with ES6, React, Vue, Angular, Express, Node Experience with with various PHP frameworks/CMS like Laravel, Drupal, and WordPress Experience with Java and Java based technologies and frameworks (Spring, Hibernate) Experience designing RESTful API Experience with microservices architecture Proficiency with relational databases and NoSQL databases. (MySQL, MongoDB, Couchbase, DynamoDB, PostgreSQL) Knowledge of version control systems and continuous integration systems (Git, Bitbucket, Jenkins, Travis CI). Proven experience in agile/scrum methodologies Experience with CloudComputing and Serverless Architecture. (AWS, GCP, Azure) Solid analytical, problem solving and decision-making skills Excellent written documentation and client-facing presentation skills Understanding of software architectural patterns Unit and automated testing Continuous deployment process and infrastructure management Analytics, data analysis, reporting@";
const clearText = text
  .replace(/[^a-zA-Z0-9 ]/g, " ")
  .toLowerCase()
  .split(" ");
const inputText = clearText.filter((word) => word !== "");
// console.log(inputText);
let wordRank = {};
for (let word of inputText) {
  if (!wordRank[word]) {
    wordRank[word] = 1;
  } else {
    wordRank[word] += 1;
  }
}
const wordExclusions = ["and","the","is","but","a","or","job","as","be","by","for","from","in"," ","  ","","to","of","an","at","on","with","that","uses","are","who","you"];

const sortable = [];
for (let word in wordRank) {
  if(!wordExclusions.includes(word))  
  sortable.push([word, wordRank[word]]);
}


sortable.sort(function(a, b) {
  return b[1] - a[1];
});



let objSorted = {}
sortable.forEach(function(item){
    objSorted[item[0]]=item[1]
})

console.log(objSorted);