const host = "localhost";
const port = 5000;

const http = require("http");
const fs = require("fs").promises;

// const fs = require("fs").promises;
// const reqListenerFunc = function (req, resp) {
//     fs.readFile(__dirname + "/index.html")
//         .then( content => {
//             resp.setHeader("Content-Type", "text/html");
//             resp.writeHead(200);
//             resp.end(content);
//         })
//         .catch(err => {
//             resp.writeHead(500);
//             resp.end(err);
//             return;
//         });
// };

let htmlFile;
const reqListenerFunc = function (req, resp) {
    resp.setHeader("Content-Type", "text/html");
    resp.writeHead(200);
    resp.end(htmlFile);
};
const simpleServer = http.createServer(reqListenerFunc);

// // Arrow function
// const simpleServer = http.createServer( (req, resp) => {
//     resp.setHeader("Content-Type", "text/html");
//     resp.writeHead(200);
//     resp.end(htmlFile);
// });

fs.readFile(__dirname + "/index.html")
    .then(content => {
        htmlFile = content;
        simpleServer.listen(port, host, () => {
            console.log(`Node.js web server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Cannot read index.html file. <br> Error: ${err}`);
        process.exit(1);
    });