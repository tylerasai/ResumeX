const { createArrayofText } = require("./extrahelp");
//getScores function gives you a score of how many of the vitalKeywords you have on the resume
const array = [["jay", 1] ,["bring bros", 2], ["ho", 1] ,["tyler", 2] ,["bro", 2],["bra",3] ,["bri", 5], ["mom",6], ["dad",6], ["granma",2], ["sher",5], ["adriana lima",4],["brazil", 5]];
const array1 = [["granma",2], ["sher",5], ["adriana lima",4],["brazil", 5]];
const text = "adriana lima";
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
  console.log("ALL VITAL", allVital);
  //creates an array of words from the text
  const resumeArray = createArrayofText(Resume); 
  let scoreArray = [];
  for (let i = 0; i < resumeArray.length; i++) {
    if (topTenVital.includes(resumeArray[i] + " " + resumeArray[i + 1] + " " + resumeArray[i + 2])) {
      scoreArray.push(resumeArray[i] + " " + resumeArray[i + 1] + " " + resumeArray[i + 2])
    } else if (topTenVital.includes(resumeArray[i] + " " + resumeArray[i + 1])) {
      scoreArray.push(resumeArray[i] + " " + resumeArray[i + 1]);
    } else if (topTenVital.includes(resumeArray[i])) {
      scoreArray.push(resumeArray[i]);
    }
  }
  console.log("TOP TEN VITAL", topTenVital);
  console.log("TOP TEN TIVAL LENGTH", topTenVital.length)
  console.log("SCORE ARRAY", scoreArray);
  let finalScores = [...new Set(scoreArray)]
  console.log("FINAL SCORES ARRAY", finalScores)
  return (finalScores.length/topTenVital.length) * 100
};
module.exports = getScores;