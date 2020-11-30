import extrahelp from "./extrahelp";
const createArrayofText = extrahelp.createArrayofText;
const wordRanker = extrahelp.wordRanker;
const ObjectToRankedArray = extrahelp.ObjectToRankedArray;

//this function counts how many times a word repeats and ranks it
//by order of repitition count in an object with word:count



export default function repeatCount (text) {

  const inputText = createArrayofText(text) //creates an array of words from the text

  
  const wordRank = wordRanker(inputText) //this is an object from the inputText array with word and count as key pair values {java:1}
  

  const rankedArray = ObjectToRankedArray(wordRank) //this creates an ordered array from the wordRank object based on word count
 
  
  let objSorted = {}
  rankedArray.forEach(function(item){
        objSorted[item[0]]=item[1]
    })
    
    return objSorted;
  };




 