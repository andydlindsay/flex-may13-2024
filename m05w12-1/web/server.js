require('dotenv').config(); // populates process.env with the values from .env

const express = require('express');
const client = require('./db/connection');

const app = express();
const port = 5001;

// GET /movie-villains
app.get('/movie-villains', (req, res) => {
  client.query('SELECT * FROM movie_villains ORDER BY id;')
    .then((response) => {
      const movieVillains = response.rows;

      // res.render('movie-villains', { movieVillains })
      // res.redirect();
      // res.send();
      res.json(movieVillains);
    });
});

// GET /movie-villains/:id
app.get('/movie-villains/:id', (req, res) => {
  const villainId = req.params.id;
  client.query('SELECT * FROM movie_villains WHERE id = $1', [villainId])
    .then((response) => {
      const villain = response.rows[0];
      res.json(villain);
    });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
