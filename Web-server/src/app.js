const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = 3000;

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('views', viewsPath);
// Setting Options
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

app.use('/static', express.static(publicPath));

app.get('/', (req, res) => {
   res.render('index', { title: 'Weather Application', info: 'Get your weather information through the address bar.' });
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
