var http = require("http");
var fs = require("fs");
var sass = require("sass");
const pug = require("pug");

const PORT = 8080;

const sassResult = sass.renderSync({
  file: "src/app.sass",
});
const html = pug.renderFile("src/app.pug");

http
  .createServer(function (request, response) {
    switch (request.url) {
      case "/app.sass":
        response.writeHead(200, { "Content-type": "text/css" });
        response.write(sassResult.css);
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
