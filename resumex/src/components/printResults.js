import React from 'react';
import jobPosting from './jobPosting';

const Results = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((job, index) => (
        <JobItem key={job.id} {...job} index={index} />
      ))}
    </div>
  );
};

export default Results;