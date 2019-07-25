const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./dist/mini-project"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "/dist/mini-project/index.html"));
});

let env = process.env.NODE_ENV || "development";

let forceSSL = (req, res, next) => {
  if (req.headers["x-forwarded-proto"] !== "https") {
    return res.redirect(["https://", req.get("Host"), req.url].join(""));
  }
  return next();
};

if (env === "production") {
  app.use(forceSSL);
}

app.listen(process.env.PORT || 8080);
