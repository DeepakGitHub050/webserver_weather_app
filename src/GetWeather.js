const request = require("request");

const getWeather = (url, callback) => {
  request({ url, json: true }, (error, { body }) => {
    //uses Es6 Destructuring property
    if (error) {
      callback("Unable to connect to Weather server");
    } else if (body.name == undefined) {
      callback("Unable to Find location");
    } else {
      const data = body; //////used Es6 Destructing property
      const { sys, main, visibility } = data;
      const { temp, pressure, humidity } = main;
      const country = sys.country,
        city = data.name,
        temperature = temp,
        Pressure = pressure,
        Humidity = humidity,
        Visibility = visibility;
      //console.log(data.main);
      callback("", {
        "Country ": country,
        " city ": city,
        " Temperature ": temperature,
        "℃  Pressure ": Pressure,
        "mbar Humidity ": Humidity,
        "% Visibility ": Visibility + "km",
      });
    }
  });
};

module.exports = getWeather;
