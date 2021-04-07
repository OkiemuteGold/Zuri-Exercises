const host = "localhost";
const port = 5000;

const http = require("http");

const server = http.createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.end(
        `{
            "name": "Okiemute Clement Gold",
            "country": "Nigeria",
            "hobby": ["Scrabbling", "Reading"]
        }`
    );
});

server.listen(port, host, () => {
    console.log(`Node.js web server is running on http://${host}:${port}`);
});
