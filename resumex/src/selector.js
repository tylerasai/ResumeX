const editText = function (text){
console.log( "text here is ", text)
  const clearText = text
    .replace(/[^a-zA-Z0-9 ]/g, " ")
    .toLowerCase()
    .split(" ");
  const inputText = clearText.filter((word) => word !== "");
  // console.log(inputText);
  let wordRank = {};
  for (let word of inputText) {
    if (!wordRank[word]) {
      wordRank[word] = 1;
    } else {
      wordRank[word] += 1;
    }
  }
  const wordExclusions = ["and","the","is","but","a","or","job","as","be","by","for","from","in"," ","  ","","to","of","an","at","on","with","that","uses","are","who","you"];
  const sortable = [];
  for (let word in wordRank) {
    if(!wordExclusions.includes(word))  
    sortable.push([word, wordRank[word]]);
  }
  sortable.sort(function(a, b) {
    return b[1] - a[1];
  });
  // let objSorted = {}
  // sortable.forEach(function(item){
  //     objSorted[item[0]]=item[1]
  // })
  return sortable
}

module.exports = {editText}