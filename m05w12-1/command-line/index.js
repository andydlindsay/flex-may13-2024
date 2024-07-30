const pg = require('pg');

const Client = pg.Client; // single connection to the database
// const Pool = pg.Pool; // collection of clients (5); managed

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};

// const pool = new Pool(config);
const client = new Client(config);

// pool.connect();
client.connect(); // establishes the connection

const verb = process.argv[2];
// console.log('verb', verb);
const id = process.argv[3];

switch (verb) {
  case 'browse':
    client.query('SELECT * FROM movie_villains ORDER BY id;')
      .then((response) => {
        console.log(response.rows);
        client.end(); // break the connection
      });
    break;

  case 'read':
    // the query as a string with placeholders AND an array of values
    // res.render('urls', { urlDatabase })
    client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
      .then((response) => {
        console.log(response.rows[0]);
        client.end();
      });
    break;

  case 'edit':
    const newName = process.argv[4];
    client.query('UPDATE movie_villains SET villain = $1 WHERE id = $2;', [newName, id])
      .then(() => {
        console.log('villain updated successfully');
        client.end();
      });
    break;

  case 'add':
    const villainName = process.argv[3];
    const movieName = process.argv[4];
    const insertQuery = 'INSERT INTO movie_villains (villain, movie) VALUES ($1, $2);'
    client.query(insertQuery, [villainName, movieName])
      .then(() => {
        console.log(`Disney+ is creating a solo series for ${villainName}`);
        client.end();
      });
    break;

  case 'delete':
    client.query('DELETE FROM movie_villains WHERE id = $1;', [id])
      .then(() => {
        console.log('the villain was vanquished');
        client.end();
      });
    break;


  default:
    console.log('please use a BREAD verb');
    client.end();
}




