const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer();

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

server.on('request', (req, res) => {
    const { method, url } = req;
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end(`<html><head><title>post form</title></head><body>METHOD: ${method}<br>URI: ${url}<br><form method="POST"><input type=text value="Input something here"><br><input type=submit></form></body></html>`);
});

let body = [];
req.on('data', (chunk) => {
    body.push(chunk);
}).on('end', () => {
    body = Buffer.concat(body).toString();
});
