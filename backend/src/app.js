const express = require("express");
const app = express();
const router = require('./routes/routes');
const path = require('path');


app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
