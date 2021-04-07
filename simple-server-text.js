const http = require("http");
const port = 5000;

const simpleServer = http.createServer((req, resp) => {
    resp.writeHead(200);
    resp.end("A simple test server returning a text response");
});

simpleServer.listen(port, () => {
    console.log(`Node.js web server is running on port ${port}.`);
});
