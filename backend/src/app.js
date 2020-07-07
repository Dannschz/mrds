const express = require("express");
const app = express();
const router = require('./routes/routes');
const path = require('path');
const connection = require('./DB/index');

connection.connect();

connection.query("SELECT * FROM ies", function (err, rows, fields) {
  if (err) throw err;
  console.log("The solution is: ", rows);
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
