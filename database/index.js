const db = require("mysql");
let connection = db.createConnection({
  database: "toDoList",
  user: "root",
  password: "pass"
});
connection.connect((err, res) => {
  if (err) {
    console.log(err, "NO DATABASE FOR YOU");
  } else {
    console.log("Succesfully passed DB connection");
  }
});

module.exports = connection;
