import repeatCount from "./repeatCount";

const getJobSpecificWords = {

    getJobSpecificResume (resume, posting) {
    

    const editResume = repeatCount(resume);
    const editJob = repeatCount(posting);
  
    let jobRepeats = [];
    for (let word in editJob) {
      for (let word2 in editResume) {
        if (word === word2) jobRepeats.push([word, editJob[word]]);
      }
    }
  
    let resumeRepeats = [];
    for (let word in editResume) {
      for (let word2 in editJob) {
        if (word === word2) resumeRepeats.push([word, editResume[word]]);
      }
    }
  
    jobRepeats.sort(function (a, b) {
      return b[1] - a[1];
    });
  
    resumeRepeats.sort(function (a, b) {
      return b[1] - a[1];
    });
  
    let summaryArr = [];
  
    for (let jobItem of jobRepeats) {
      for (let resumeItem of resumeRepeats) {
        if (jobItem[0] === resumeItem[0]) {
          summaryArr.push(resumeItem);
        }
      }
    }
  
    return summaryArr;
  },
  
  //This is getting job specific words repeated in the posting
  
  getJobSpecificPosting (posting, vitalkeywords, vitalsoftskills) {
    const editJob = repeatCount(posting);
  
    const arrayOfRepeat = [];
  
    for(let item in editJob ){
      arrayOfRepeat.push([item, editJob[item]]);
    }
  
    vitalkeywords = vitalkeywords.flat();
    vitalsoftskills = vitalsoftskills.flat();
  
    const finalArrayOfRepeat = [];
  
  
    for(let item of arrayOfRepeat) {
      if(!vitalkeywords.includes(item[0]) && !vitalsoftskills.includes(item[0])) {
        finalArrayOfRepeat.push(item);
      }
    }
  
    finalArrayOfRepeat.sort(function (a, b) {
      return b[1] - a[1];
    });
  
    return finalArrayOfRepeat;
  }

}

export default getJobSpecificWords;
