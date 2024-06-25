const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 5001;

// database
const users = {
  abcdef: {
    id: "abcdef",
    username: "alice",
    password: "1234",
  },
  ghijkl: {
    id: "ghijkl",
    username: "bob",
    password: "5678",
  },
};

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(express.urlencoded({ extended: false })); // creates and populates req.body
app.use(cookieParser()); // creates and populates req.cookies

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  // grab the username and password from the body
  const username = req.body.username;
  const password = req.body.password;

  // did they NOT provide a username and password
  if (!username || !password) {
    res.status(400).send('Please provide a username and password');
    return;
  }

  // lookup the user based on their username
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.username === username) {
      // yay! we found our user
      foundUser = user;
    }
  }

  // did we NOT find a user
  if (!foundUser) {
    return res.status(400).send('no user with that username found');
  }

  // do the passwords not match
  if (foundUser.password !== password) {
    return res.status(400).send('passwords do not match');
  }

  // they are who they say they are!

  // set a cookie
  res.cookie('userId', foundUser.id); // async

  // redirect the user somewhere
  res.redirect('/protected');
});

// GET /protected
app.get('/protected', (req, res) => {
  // pull the userId off of req.cookies
  const userId = req.cookies.userId;

  // check if the user does not have a cookie
  if (!userId) {
    return res.status(401).send('you must be signed in to see this page');
  }

  // look up the user based on their userId
  const user = users[userId];

  const templateVars = {
    user: user
  };

  // render the protected template
  res.render('protected', templateVars);
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the userId cookie
  res.clearCookie('userId');

  // redirect the user somewhere
  res.redirect('/login');
});

// GET /register
app.get('/register', (req, res) => {
  res.render('register');
});

// POST /register
app.post('/register', (req, res) => {
  // grab the username and password from the body
  const username = req.body.username;
  const password = req.body.password;

  // did they NOT provide a username and password
  if (!username || !password) {
    res.status(400).send('Please provide a username and password');
    return;
  }

  // check if there is a user with that username
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.username === username) {
      // we found a duplicate
      foundUser = user;
    }
  }

  // did we find a user
  if (foundUser) {
    return res.status(400).send('a user with that username already exists');
  }

  // yay! happy path! unique username

  // create a new user object
  const id = Math.random().toString(36).substring(2, 8); // random 6 character string

  const newUser = {
    id: id,
    username: username,
    password: password,
  };

  // update the users object
  users[id] = newUser;

  console.log(users);

  // redirect to the login page
  // or do we set the cookie and redirect to the protected page
  res.cookie('userId', id);

  res.redirect('/protected');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
