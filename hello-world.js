const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer();

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

server.on('request', (req, res) => {
    const { method, url } = req;
    let body = [];
    req.on('data', (chunk) => {
	body.push(chunk);
	console.log('chunk:');
	console.log(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
	console.log('chunk:');
	console.log(body);
	console.log(body.length);
	console.log('end:');
    });
    console.log('response is ready');
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.write('<html><head><title>post form</title></head>');
    res.write('<body>');
    res.write('METHOD: ');
    res.write(method);
    res.write('<br>URI: ');
    res.write(url);
    res.write('<br>Body<br>');
	console.log(body);
	console.log(body.length);
    res.write(body.toString());
    res.write('<br><form method="POST"><input type=text name="yourtext" value="Input something here"><br><input type=submit name="go"></form></body></html>');
    res.end();
});

