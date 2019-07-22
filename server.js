const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./dist/mini-project"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "/dist/mini-project/index.html"));
});

app.listen(process.env.PORT || 8080);
