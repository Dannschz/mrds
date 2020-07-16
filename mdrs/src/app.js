const express = require("express");
const app = express();
const expressFormidable = require("express-formidable");
const router = require("./routes/routes");
const signupRouter = require("./routes/signup");
const path = require("path");
const exphbs = require("express-handlebars");
const cors = require("cors");

require("./DB/index");

app.use(express.static(path.join(__dirname, "public")));

app.use(expressFormidable());

app.use(
  cors({
    origin: "http://loclahost:3000",
    credentials: true,
  })
);

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "./views/layouts"),
    partialsDir: path.join(__dirname, "./views/partials"),
  })
);
app.set("view engine", ".hbs");

app.use("/", router);
app.use("/", signupRouter);

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
