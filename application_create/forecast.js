const request = require('request');

const forecast = (latitude, longitude, callback) => {
   const url = `http://api.weatherstack.com/current?access_key=2ee26b0b16f6127a088cdc578e69e347&query=${latitude},${longitude}`;

   request({ url, json: true }, (error, { body }) => {
      // Error handling
      // prettier-ignore
      if(error ) {
         callback('Cannot connected to the service network.', undefined);

      } else if (body.error) {
         callback('An error occured on the weather stack', undefined);
      } else {
         const {temperature, weather_descriptions: weatherInfo, feelslike} = body.current

         callback(
            undefined,
            `It's ${weatherInfo[0]}, the current temperature is ${temperature}°C and it feels like ${feelslike}°C`
         );
      }
   });
};

module.exports = forecast;
