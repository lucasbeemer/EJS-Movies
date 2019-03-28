const express = require('express');
const app = express();
const env = 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

//App Uses Public folder for CSS styles
app.use('/public', express.static('public'));


// GET all data
// app.get('/', (req, res) => {
//     knex('movies').orderBy('votes', 'DESC').then((results) => {
//         res.render('index', {movies: results});
//     })
// })

app.get('/', (req, res) => {
    knex.select().from('movies').orderBy('votes', 'DESC').then(function(movies) {
        knex.select().from('users').then(function(users) {
            res.render('index',
            { users: users,
              movies: movies
            });
        });
    }).catch(function(error) {
        console.log(error);
    });
})



// GET add new data page
app.get('/movies/new', (req, res) => {
    res.render('new_movie');
})

// Adds UPVOTE
app.get('/upvote/:id', (req, res) => {
    knex('movies').where('id', req.params.id)
    .increment('votes', 1)
    .then(() => {
        res.redirect('/')
    })
})

// Subtracts DOWNVOTE
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