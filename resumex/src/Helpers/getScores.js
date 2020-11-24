const {extractKeywords} =require("./extrahelp")
const {createArrayofText} =require("./extrahelp")
const {wordRanker} =require("./extrahelp")
const {ObjectToRankedArray} =require("./extrahelp")


const pairMatch = function (array, paragraph) {

  const resultArray = extractKeywords(array)  //this will change the json.data into an array of words ["React","Vue"]
  
  const paragraphArray = createArrayofText(paragraph) //this will change the text into an array of words ["This","is","an","example"]
  
  let result = []; //this is an array to hold all matches in the resultsArray and paragraphArray

  for (let i = 0; i < paragraphArray.length; i++) {
    if (resultArray.includes(paragraphArray[i] + " " + paragraphArray[i + 1])) {
      result.push(paragraphArray[i] + " " + paragraphArray[i + 1]);
    } else if (
      resultArray.includes(
        paragraphArray[i] +
          " " +
          paragraphArray[i + 1] +
          " " +
          paragraphArray[i + 2]
      )
    ) {
      result.push(
        paragraphArray[i] +
          " " +
          paragraphArray[i + 1] +
          " " +
          paragraphArray[i + 2]
      );
    } else if (resultArray.includes(paragraphArray[i])) {
      result.push(paragraphArray[i]);
    }
  }
  const wordRank = wordRanker(result) //this is an object from the result array with word and count as key pair values {java:1}

  const rankedArray = ObjectToRankedArray(wordRank) //this creates an ordered array from the wordRank object based on word count
  
  return rankedArray;
};

//getScores function gives you a score of how many of the vitalKeywords you have on the resume
const getScores = function (vitalKeywords, Resume) {
  
  console.log("vitalKeywords",vitalKeywords)

  if(!vitalKeywords.length) {
    return []
  }
  
  
  const topTenVital = [];
  
  for (let i = 0; i < 10; i++) {              //get the top ten vitalKeywords
    topTenVital.push(vitalKeywords[i][0]);
  }
  const resumeArray = createArrayofText(Resume) //creates an array of words from the text
  
  let primaryScore = 0;

  for (let i = 0; i < 10; i++) {
    if (topTenVital.includes(resumeArray[i] + " " + resumeArray[i + 1] + " " + resumeArray[i + 2])) {
      primaryScore++;
    }

    if (topTenVital.includes(resumeArray[i] + " " + resumeArray[i + 1])) {
      primaryScore++;
    }
    if (resumeArray.includes(topTenVital[i])) {
      primaryScore++;
    }
  }
  return primaryScore;
};

module.exports = getScores
