var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "ieuser",
  password: "s3kreee7",
  database: "users"
});

module.exports = connection;
