//server
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("../database/index.js");
//const path = require("path");

app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, "../dist")));
app.use(express.static(__dirname + "/../dist"));

app.post("/todos", (req, res) => {
  console.log(req.body.payload, "<----req.body.payload in post");
  let val = req.body.payload.value;
  // console.log(val, "<----val in post");
  let priority = req.body.payload.priority;
  // console.log(priority, "<----priority in post");
  let str = `INSERT INTO todos (todo) VALUES ('${val}')`;
  db.query(str, (err, results) => {
    if (err) {
      res.send("error in db insertion");
    } else {
      res.send("AWWW YEET ITS IN THERE");
    }
  });
});

app.get("/todos", (req, res) => {
  let str = `SELECT * FROM todos`;
  db.query(str, (err, todos) => {
    if (err) {
      res.send(err, "error in DB retrieval");
    } else {
      console.log("successful retrieval");
      res.send(todos);
    }
  });
});

app.listen(3030, () => {
  console.log("Server has started and is listening at port 3030");
});
