var http = require("http");
var fs = require("fs");

const PORT = 8080;

const pug = require("pug");

// Compile template.pug, and render a set of data
const html = pug.renderFile("template.pug", {
  name: "Timothy",
});

http
  .createServer(function (request, response) {
    switch (request.url) {
      case "/index.css":
        response.writeHead(200, { "Content-type": "text/css" });
        var fileContents = fs.readFileSync("indexy.css", {
          encoding: "utf8",
        });
        response.write(fileContents);
        return response.end();
      case "/favicon.ico":
        response.statusCode = 204
        return response.end()
      default:
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(html);
        return response.end();
    }
  })
  .listen(PORT);

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
};
