const express = require("express");

const app = express();

app.get("/help", (req, res) => {
  res.send("Help page");
});

app.get("/About", (req, res) => {
  res.send({ name: "DKS", age: 25 });
});

app.get("/weather", (req, res) => {
  res.send("Weather details:");
});

app.listen(3000, () => {
  console.log("Server has started on port 3000");
});
