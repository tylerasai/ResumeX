const createArrayofText = function (text) {
  
  const textArray = text
    .replace(/[^a-zA-Z0-9-]/g, " ")
    .toLowerCase()
    .split(" ")
    .filter((word) => word !== "");
    return textArray;
}

const extractKeywords = function (array) {

  
  let resultArray = [];
  for (let item of array) {
    resultArray.push(item["keyword"].toLowerCase());
  }
  return resultArray;
}

const wordRanker = function (array) {
  let wordRank = {};
  for (let word of array) {
    if (!wordRank[word]) {
      wordRank[word] = 1;
    } else {
      wordRank[word] += 1;
    }
  }
  return wordRank;
}

const ObjectToRankedArray = function (wordRank) {
  const wordExclusions = ["and", "the","their", "is", "but", "s","a", "or", "job", "as", "be", "by", "for", "from", "in", " ", "  ", "", "to", "of", "an", "at", "on", "with", "that", "uses", "are", "who", "you", "it", "us", "we", "about", "from", "both", "will", "can", "our","their"];
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

module.exports = {ObjectToRankedArray,extractKeywords,createArrayofText,wordRanker}