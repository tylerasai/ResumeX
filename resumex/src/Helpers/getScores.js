const { createArrayofText } = require("./extrahelp");
//getScores function gives you a score of how many of the vitalKeywords you have on the resume

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
 
  let finalScores = [...new Set(scoreArray)]
  return (finalScores.length/topTenVital.length) * 100
};
module.exports = getScores;