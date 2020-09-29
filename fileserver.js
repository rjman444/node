var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (request, response) {
    var q = url.parse(request.url, true);
    var filename = "." + q.pathname + ".html";
    fs.readFile(filename, function (error, content) {
      if (error) {
        if (error.code == "ENOENT") {
          fs.readFile("./404.html", function (error, content) {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(content, "utf-8");
          });
        } else {
          response.writeHead(500);
          response.end(
            "Sorry, check with the site admin for error: " +
              error.code +
              " ..\n"
          );
          response.end();
        }
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(content, "utf-8");
      }
    });
  })
  .listen(8080);
