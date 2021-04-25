const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3001;
const rhoSpec_01 = require(
  './specs/rhoSpecs/rhoSpec_01');

const server = http.createServer((req, res) => {

  if(req.method == 'GET'){
    const qs = url.parse(req.url, true);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(rhoSpec_01));
  }

  if(req.method == 'POST'){
    let jsonString = '';
    req.on('data', data => {
      jsonString += data;
    });
    req.on('end', () => {
      console.log(jsonString);
    });
    res.end(jsonString);
  }
});

server.listen(port, hostname, () => {
  console.log(
    `Server running at http://${hostname}:${port}/`);
});
