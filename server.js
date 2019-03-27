const express = require('express');
const app = express();
const env = 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

// GET all data
app.get('/', (req, res) => {
    knex('movies').orderBy('votes', 'DESC').then((results) => {
        res.render('index', {movies: results});
    })
})

// GET add new data page
app.get('/movies/new', (req, res) => {
    res.render('new_movie');
})

app.get('/upvote/:id', (req, res) => {
    knex('movies').where('id', req.params.id)
    .increment('votes', 1)
    .then(() => {
        res.redirect('/')
    })
})

app.get('/downvote/:id', (req, res) => {
    knex('movies').where('id', req.params.id)
    .increment('votes', -1)
    .then(() => {
        res.redirect('/')
    })
})

// CREATE a piece of data
app.post('/movies', (req, res) => {
    knex('movies').insert({
        title: req.body.title,
        description: req.body.description,
        genre: req.body.genre
    }).then(() => {
        res.redirect('/')
    })
})

app.listen(port, () => {
    console.log(`\n Listening on port ${port}`);
})