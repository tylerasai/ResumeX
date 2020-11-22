const express = require("express");
const router = express.Router();
const { getPostsByUsers } = require("../helpers/dataHelpers");

module.exports = ({ getKeywords, getUserByEmail, addUser, getUsersPosts }) => {
  /* GET users listing. */
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
