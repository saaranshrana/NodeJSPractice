const http = require('http');
const hostname = 'localhost';
const port = 5500;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to my first NodeJS webpage!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at   http://${hostname}:${port}/`);
});
