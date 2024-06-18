const http = require('http');

const server = http.createServer();
const port = 54000;

server.on('request', (request, response) => {
  console.log('request', request.method, request.url); // GET /home, POST /about
  const method = request.method;
  const url = request.url;

  if (method === 'GET' && url === '/home') {
    response.write('this is the home page');
  } else if (method === 'GET' && url === '/about') {
    response.write('learn more about us');
  } else {
    response.write('this is not the page you are looking for');
  }

  response.statusCode = 201;
  response.end(); // we're done, send the response back now
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

// http://localhost:54000/contactus
