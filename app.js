require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
const axios = require('axios');

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require('cors');



const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable` ;
const db = new Client({connectionString: process.env.DB_URL || connectionString});
db.connect(() => {

  console.log('successfully connected to db');

});

var keywordsRouter = require("./routes/keywords");
var softSkillsRouter = require("./routes/softskills");

const dbHelpers = require('./db/helpers/dbHelpers')(db);


var app = express();
app.use(cors());
app.use(express.static("./resumex/build"));

const port = process.env.PORT || 3005

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/keywords', keywordsRouter(dbHelpers));
app.use('/api/softskills', softSkillsRouter(dbHelpers));

app.post('/api/jobs', (req, res) => {
  
  axios.post("https://jooble.org/api/1d7d38d8-11e8-454e-a8cc-545db82430c9", {
    "keywords": req.body.keywords,
    "location": req.body.location,
    "page": "1"
 })


 .then(response => {
  // return response.data.jobs;
  
  res.send(response.data.jobs)
})
.catch((error) => {
  console.error(error);
  res.status(500);
  res.send(error);
  
  
})
// .then(setJobPosting);



})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'resumex','build', 'index.html'));
});


app.listen(port);

module.exports = app;

