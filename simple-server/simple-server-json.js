const host = "localhost";
const port = 5000;

const http = require("http");
const persDetails = require("./pers-details.json");

const simpleServer = http.createServer((req, resp) => {
    resp.setHeader("Content-Type", "application/json");
    resp.writeHead(200);
    resp.end(
        `
        Name: ${persDetails.name},
        Country: ${persDetails.country},
        Hobby: ${persDetails.hobby}
        `
    );
});

simpleServer.listen(port, host, () => {
    console.log(`Node.js web server is running on http://${host}:${port}`);
});
