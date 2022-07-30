const getWeather = (url, callback) => {
  request({ url, json: true }, (error, { body }) => {
    //uses Es6 Destructuring property
    if (error) {
      callback("Unable to connect to Weather server");
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
      callback(
        "Country: " +
          country +
          " city: " +
          city +
          " Temperature: " +
          temperature +
          "℃  Pressure: " +
          pressure +
          "mbar Humidity: " +
          humidity +
          "% Visibility: " +
          Visibility +
          "km"
      );
    }
  });
};
