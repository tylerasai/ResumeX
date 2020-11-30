const express = require("express");
const router = express.Router();

module.exports = ({ getSoftSkills }) => {
  
  //Get soft skills
  router.get("/", (req, res) => {
    getSoftSkills()
      .then((softskills) => res.json(softskills))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  

  return router;

};
