const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.end();
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
