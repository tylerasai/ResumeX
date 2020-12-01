const extrahelp = {

  extractWordsOnly : (array) => {
    let wordsOnlyArray = []
    for(let item of array) {
      wordsOnlyArray.push(item[0])
    }
    return wordsOnlyArray;
  },
  
  
  createArrayofText: (text) => {
    
    const textArray = text
      .replace(/[^a-zA-Z0-9-]/g, " ")
      .toLowerCase()
      .split(" ")
      .filter((word) => word !== "");
      return textArray;
  },
  
  extractKeywords : (array = []) => {
  
    let resultArray = [];
    for (let item of array) {
      resultArray.push(item["keyword"].toLowerCase());
    }
    return resultArray;
  },
  
  wordRanker : (array) => {
    let wordRank = {};
    for (let word of array) {
      if (!wordRank[word]) {
        wordRank[word] = 1;
      } else {
        wordRank[word] += 1;
      }
    }
    return wordRank;
  },
  
  ObjectToRankedArray : (wordRank) => {
    const wordExclusions = ["and","should","have","might","less","may","could","if","the","these","how","under","him", "this","more","over","those","the","their", "is", "but", "s","a", "or", "job", "as", "be", "by", "for", "from", "in",", ", "  ", "", "to", "has","of", "an", "at","than", "on","where","when", "with","why", "that", "uses", "are", "who", "you", "it", "us", "we", "about", "from","then", "both", "will", "can", "our","their"];
    const sortable = [];
    for (let word in wordRank) {
      if(!wordExclusions.includes(word))
      sortable.push([word, wordRank[word]]);
    }
    sortable.sort(function (a, b) {
      return b[1] - a[1];
    });
    return sortable;
  }

}


export default extrahelp