const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 3000;

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
   res.send('Test world');
});

app.listen(port, () => {
   console.log(`Server has started at the port : ${port}`);
});
