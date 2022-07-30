const path = require("path");
const express = require("express");
const hbs = require("hbs");
const getWeather = require("./GetWeather");

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
    name: "Created by Deepak Kumar Sharma",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help title",
    name: "Created by Deepak Kumar Sharma",
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About page", name: "DKS", age: 25 });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provie address",
    });
  }
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    req.query.address +
    "&APPID=62b4ca8c3ab560e2742636ac825805d5&units=metric";
  getWeather(url, (error, data) => {
    if (error) {
      res.send({ error });
    } else {
      res.send({ data });
    }
  });
});

app.get("/product", (req, res) => {
  console.log(req.query);
  res.send({ products: [] });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "DKS",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server has started on port 3000");
});
