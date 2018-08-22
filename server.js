const http = require("http");
const fs = require("fs");

const createRandomWord = require("./utils");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const htmlFile = fs.readFileSync("./client/index.html");
        res.write(htmlFile);
        res.end();
    } else if (req.url === "/style.css") {
        const stylesFile = fs.readFileSync("./client/style.css");
        res.setHeader("Content-Type", "text/css");
        res.write(stylesFile);
        res.end();
    } else if (req.url === "/index.js") {
        const jsFile = fs.readFileSync("./client/index.js");
        res.write(jsFile);
        res.end();
    } else if (req.url === "/randomWord") {
        res.write(createRandomWord());
        res.end();
    } else {
        res.statusCode = 404;
        res.write("We could not find what you are looking for");
        res.end();
    }
});

server.listen(3000);
