const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = 3000;

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setting Options
app.set('views', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

app.use('/static', express.static(publicPath));

// Configuring routes
app.get('/', (req, res) => {
   res.render('index', { title: 'Weather Application', info: 'Get your weather information through the address bar.' });
});

app.get('/weather', (req, res) => {
   if (!req.query.address) {
      return res.send({ error: 'Please provide an address' });
   }

   geocode(req.query.address, (error, { latitude, longitude, location }) => {
      if (error) {
         return res.send({ error });
      }
      forecast(latitude, longitude, (error, forecastString) => {
         if (error) {
            return res.send({ error });
         }

         res.send({
            forecast: forecastString,
            address: req.query.address,
            location,
         });
      });
   });
});

app.get('/about', (req, res) => {
   res.render('about', { title: 'About Page', info: 'A self learner, developer wannabe.' });
});

app.get('/help', (req, res) => {
   res.render('help', { title: 'Help Page', info: 'Send us a email to dogustemizsoy@gmail.com for support' });
});

app.listen(port, () => {
   console.log(`Server has started at the port : ${port}`);
});
