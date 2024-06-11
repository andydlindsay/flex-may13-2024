const net = require('net');

const connection = net.createConnection({
  host: 'localhost',
  port: 3000
});

// set the encoding on incoming messages
connection.setEncoding('utf-8');

// listen for incoming messages/data
connection.on('data', (data) => {
  console.log('server says:', data);

  // connection.write('it is nice to be here');
});

// set the enconding on standard in
process.stdin.setEncoding('utf-8');

// listen for information coming from standard in (terminal)
process.stdin.on('data', (data) => {
  console.log('this was typed:', data);

  // send the information to the server
  connection.write(data);
});