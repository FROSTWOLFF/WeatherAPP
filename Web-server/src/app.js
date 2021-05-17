const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = 3000;

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');

app.set('views', viewsPath);
app.set('view engine', 'hbs');

app.use('/static', express.static(publicPath));

app.get('/', (req, res) => {
   res.render('index');
});

app.get('/about', (req, res) => {
   res.send('About page');
});

app.get('/help', (req, res) => {
   res.send('Help page');
});

app.listen(port, () => {
   console.log(`Server has started at the port : ${port}`);
});
