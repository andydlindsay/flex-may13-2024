const pg = require('pg');

const Client = pg.Client; // single connection to the database

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};

const client = new Client(config);

client.connect(); // establishes the connection

module.exports = client;
