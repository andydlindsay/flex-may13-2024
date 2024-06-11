const net = require('net');

// create a TCP server by calling .createServer
const server = net.createServer(); // TCP server

// choose a port for our server to listen (ie. run) on
const port = '3000'; // port can be a string or a number

// listen for incoming connections; callback is called once for each connection/client
server.on('connection', (connection) => {
  console.log('someone has connected to the server');

  // send a welcome message to the client using .write
  connection.write('welcome to the server!');

  // set the encoding on the connection
  connection.setEncoding('utf-8');

  // listen for incoming data
  connection.on('data', (data) => {
    console.log('client says:', data);
  });
});

// start the server listening on the provided port
server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
