const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "dist/mini-project")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "dist/mini-project", "index.html"));
});

if (process.env.PORT) {
  //for production enviroment
  console.log("production");
  app.use(express.static(path.join(__dirname, "dist/mini-project")));
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "dist/mini-project", "index.html"));
  });
} else {
  // for dev enviroment
  console.log("dev");

  app.use(express.static(path.join(__dirname, "dist/mini-project")));
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "dist/mini-project", "index.html"));
  });

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
}

app.listen(port, function() {
  console.log(`Running on port ${port}`);
});
