const path = require("path");
const express = require("express");

const app = express();
/*console.log(__dirname);
console.log(path.join(__dirname, ".."));*/

const publicDirectory = path.join(__dirname, "../public");
app.set("view engine", "hbs");
app.use(express.static(publicDirectory));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Deepak Kumar Sharma 124",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help title",
    name: "Help doc page",
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About page", name: "DKS", age: 25 });
});

app.get("/weather", (req, res) => {
  res.send("Weather details:");
});

app.listen(3000, () => {
  console.log("Server has started on port 3000");
});
