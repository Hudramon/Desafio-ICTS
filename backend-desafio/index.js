require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql");
const path = require("path");
const cors = require("cors");

const app = express();

/**
 * Database setup
 */
 mysql.connect(
  process.env.mysql_URL,
  {
    useNewUrlParser: true
  }
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

app.use(require("./routes"));

app.listen(3000);
