module.exports = (db) => {
  const getKeywords = () => {
    const query = {
      text: "SELECT * FROM keywords",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getSoftSkills = () => {
    const query = {
      text: "SELECT * from softskills",
    };

    return db 
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  }

  return {
    getKeywords,
    getSoftSkills
};
};
