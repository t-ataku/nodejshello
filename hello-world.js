const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello, Node.js World\n');
    });

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
    });

    server.on('request', (req, res) => {
        const { method, url } = request;
        res.statusCode = 200;
	res.setHeader('content-type', 'text/plain');
	res.end(`METHOD: ${method}\nURI: ${url}\n`);
    });