import extrahelp from "./extrahelp";
const extractKeywords = extrahelp.extractKeywords;
const createArrayofText = extrahelp.createArrayofText;
const wordRanker = extrahelp.wordRanker;
const ObjectToRankedArray = extrahelp.ObjectToRankedArray;



//pairMatch function matches the wordlist from our database with the 
//the words in the job posting to form the vitalKeywords list
//to pass ATS
export default function pairMatch(array, paragraph) {
  
  
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
