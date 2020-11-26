const {extractKeywords} =require("./extrahelp")
const {createArrayofText} =require("./extrahelp")
const {wordRanker} =require("./extrahelp")
const {ObjectToRankedArray} =require("./extrahelp")

const array = [["jay", 1] ,["bring bros", 2], ["ho", 1] ,["tyler", 2] ,["bro", 2],["bra",3] ,["bri", 5], ["mom",6], ["dad",6], ["granma",2], ["sher",5], ["adriana lima",4],["brazil", 5]];
const text = " jay bring bros adriana lima jay";

//this function counts how many times a word repeats and ranks it
//by order of repitition count in an object with word:count
const repeatCount = function (text) {

  const inputText = createArrayofText(text) //creates an array of words from the text

  
  const wordRank = wordRanker(inputText) //this is an object from the inputText array with word and count as key pair values {java:1}
  

  const rankedArray = ObjectToRankedArray(wordRank) //this creates an ordered array from the wordRank object based on word count
 
  
  let objSorted = {}
  rankedArray.forEach(function(item){
        objSorted[item[0]]=item[1]
    })
    
    return objSorted;
  };


  module.exports = repeatCount;


 