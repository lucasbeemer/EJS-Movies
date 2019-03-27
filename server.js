const express = require('express');
const app = express();
const env = 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    knex('movies').then((results) => {
        res.render('index', {movies: results});
    })
})

app.listen(port, () => {
    console.log(`\n Listening on port ${port}`);
})