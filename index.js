const express = require("express");
const app = express();

const log = console.log;
const path = require("path");
const PORT = 8080;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
  //__dirname : It will resolve to your project folder.
});

app.listen(PORT, () => log("Server is starting on PORT,", 8080));
