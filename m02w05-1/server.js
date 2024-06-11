const net = require('net');

const server = net.createServer(); // TCP server
const port = '3000';

// listen for incoming connections
server.on('connection', (connection) => {
  console.log('someone has connected to the server');

  // listen for incoming data
  connection.on('data', (data) => {
    console.log('client says', data);
  });

  // send a welcome message to the client
  connection.write('welcome to the server!');

  // set the encoding on the connection
  connection.setEncoding('utf-8');
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
