const geocode = require('./geocode');
const forecast = require('./forecast');

const address = 'Istanbul';

geocode(address, (error, { latitude, longitude, location }) => {
   if (error) {
      return console.log(error);
   }

   forecast(latitude, longitude, (error, forecastString) => {
      if (error) {
         return console.log(error);
      }

      console.log(`In ${location}, ${forecastString}`);
   });
});
