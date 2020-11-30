const express = require("express");
const router = express.Router();

module.exports = ({ getKeywords }) => {
  /* GET keywords listing. */
  router.get("/", (req, res) => {
    getKeywords()
      .then((keywords) => res.json(keywords))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  

  

  return router;
};
