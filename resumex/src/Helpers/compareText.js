const {extractKeywords} =require("./extrahelp")
const {createArrayofText} =require("./extrahelp")
const {wordRanker} =require("./extrahelp")
const {ObjectToRankedArray} =require("./extrahelp")




const repeatCount = function (text) {
  
  const inputText = createArrayofText(text) //this will change the text into an array of words

  const wordRank = wordRanker(inputText) //this is a dictionary object from the result array with count of the words {java:1}
 
  const sortable = ObjectToRankedArray(wordRank)//this creates an ordered array from the dictionary object based on word repeats
 

  let objSorted = {};
  sortable.forEach(function (item) {
    objSorted[item[0]] = item[1];
  });
  return objSorted;
};

//compareText function gives you an array of how many times the word
//is repeated in the resume and in the job posting

export default function compareText(resume, posting) {
  const editResume = repeatCount(resume);
  const editJob = repeatCount(posting);
  

  let jobRepeats = [];
  for (let word in editJob) {
    for (let word2 in editResume) {

      if (word === word2)
        jobRepeats.push([word, editJob[word]]);

    }
  }

  let resumeRepeats = [];
  for (let word in editResume) {
    for (let word2 in editJob) {
      if (word === word2)
        resumeRepeats.push([word, editResume[word]]);

    }
  }

  jobRepeats.sort(function (a, b) {
    return b[1] - a[1];
  });

  resumeRepeats.sort(function (a, b) {
    return b[1] - a[1];
  });

  let summaryArr = [];

  for (let jobItem of jobRepeats) {
    for (let resumeItem of resumeRepeats) {

      if (jobItem[0] === resumeItem[0]) {
        summaryArr.push("posting has:" + jobItem);
        summaryArr.push("resume has:" + resumeItem);
      }
    }
  }

  return summaryArr;
  

};

