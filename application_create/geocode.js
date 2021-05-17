const request = require('request');

const geocode = (address, callback) => {
   const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
   )}.json?access_token=pk.eyJ1IjoiZG9ndXN0ZW1penNveSIsImEiOiJja285ZTNuazAwdHFkMm9tcTc4NHZzYnNzIn0.19PsELyiIhNsJcuK8dd_Lw`;

   request({ url, json: true }, (error, { body }) => {
      // Error handling
      // prettier-ignore
      if (error ) {
         callback('Unable to connect to the service network', undefined );

      } else if(body.message === 'Not Found') {
         callback(`No matching results found !`, undefined);

      } else if (body.message === 'Not Authorized - No Token' || body.message === 'Not Authorized - Invalid Token') {
         callback('Problem with the access token, please verify before trying it again.', undefined)
      } else {
         const {center: coords, place_name: location} = body.features[0];

         callback(undefined, {
            latitude: coords[1],
            longitude: coords[0],
            location,
         })
      }
   });
};

module.exports = geocode;
