const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
/*console.log(__dirname);
console.log(path.join(__dirname, ".."));*/

//defined paths for expess config
const publicDirectory = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup handle bars and views location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

//setup static directory to serve
app.use(express.static(publicDirectory));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Deepak Kumar Sharma",
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
