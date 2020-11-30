var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require('cors');
const db = require("./db");

var indexRouter = require("./routes/index");
var keywordsRouter = require("./routes/keywords");
var softSkillsRouter = require("./routes/softskills");

const dbHelpers = require('./db/helpers/dbHelpers')(db);


var app = express();
app.use(cors());
app.use(express.static("../resumex/build"));

const port = process.env.productiton.PORT

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use('/api/keywords', keywordsRouter(dbHelpers));
app.use('/api/softskills', softSkillsRouter(dbHelpers));


module.exports = app;
