const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/summer", (req, res) => {
  res.sendFile(__dirname + "/summer.html");
});

app.get("/winter", (req, res) => {
  res.sendFile(__dirname + "/winter.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/404.html");
});

app.listen(8000, () => {
  console.log("Express app listening on port 8000!");
});
