const { createArrayofText } = require("./extrahelp");

//getScores function gives you a score of how many of the vitalKeywords you have on the resume

const array = [["jay", 1] ,["bring bros", 2], ["ho", 1] ,["tyler", 2] ,["bro", 2],["bra",3] ,["bri", 5], ["mom",6], ["dad",6], ["granma",2], ["sher",5], ["adriana lima",4],["brazil", 5]];
const text = " jay bring bros adriana lima";

const getScores = function (vitalKeywords, Resume) {

  if (!vitalKeywords.length) {
    return [];
  }

  const allVital = [];
  
  //get the top ten vitalKeywords
  
  for (let i = 0; i < vitalKeywords.length; i++) {
    allVital.push(vitalKeywords[i][0]);
    
  }

  const topTenVital = allVital.slice(0,10);


//creates an array of words from the text
  const resumeArray = createArrayofText(Resume); 

  let primaryScore = 0;


  for (let i = 0; i < resumeArray.length; i++) {
    if (resumeArray.includes(topTenVital[i])) {
      primaryScore += 1;
    } else if (topTenVital.includes(resumeArray[i] + " " + resumeArray[i + 1])) {
      primaryScore += 1;
    } else if (topTenVital.includes(resumeArray[i] + " " + resumeArray[i + 1] + " " + resumeArray[i + 2])) {
      primaryScore += 1;
    }

  }

  return primaryScore/topTenVital.length * 100;
};


module.exports = getScores;
