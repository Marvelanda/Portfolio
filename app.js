const http = require('http');
const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('/src/index.html');
});

server.listen(port, () => {
  console.log(`Server running at port ` + port);
});
