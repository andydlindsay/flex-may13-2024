const express = require('express');

const app = express(); // creates the HTTP server
const port = 4001;

// middleware
app.use((req, res, next) => {
  req.secretMessage = 'hello world';

  next(); // I'm done; call the next middleware or route handler in line
});

// route handler: handles/responds to request to a particular verb/path combination

// GET /home
app.get('/home', (request, response) => {
  console.log('inside the /home route handler: ', request.secretMessage); // "hello world"

  response.status(202); // default is 200
  response.send('welcome to the home page of our app');
});

// GET /about
app.get('/about', (req, res) => {
  res.status(302);
  res.send('learn more about us here!');
});

// GET /products
app.get('/products', (req, res) => {
  res.send('here are all the products that we have for sale');
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
