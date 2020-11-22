const pairMatch = (array, paragraph) => {
  let resultArray = [];
  for (let item of array) {
    resultArray.push(item["keyword"].toLowerCase());
  }

  const normalParagraph = paragraph.toLocaleLowerCase();
  const paragraphArray = normalParagraph
    .replace(/[^a-zA-Z0-9-]/g, " ")
    .toLowerCase()
    .split(" ")
    .filter((word) => word !== "");

  let result = [];

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

  let wordRank = {};
  for (let word of result) {
    if (!wordRank[word]) {
      wordRank[word] = 1;
    } else {
      wordRank[word] += 1;
    }
  }

  const sortable = [];
  for (let word in wordRank) {
    sortable.push([word, wordRank[word]]);
  }
  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  return sortable;
};

module.exports = pairMatch;