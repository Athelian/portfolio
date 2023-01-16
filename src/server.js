var http = require("http");
var fs = require("fs");
var sass = require("sass");
const pug = require("pug");

const PORT = 8080;
const html = pug.renderFile("template.pug");
var result = sass.renderSync({
  file: "App.sass",
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
      case "/App.sass":
        response.writeHead(200, { "Content-type": "text/css" });
        response.write(result.css);
        return response.end();
      case "/favicon.ico":
        response.statusCode = 204;
        return response.end();
      default:
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(html);
        return response.end();
    }
  })
  .listen(PORT);
