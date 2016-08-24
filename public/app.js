/**
 * Created by rujuraj on 8/22/16.
 */
var http = require("http");
var fs = require("fs");
var url = require('url');

// handle 404
function send404(response) {
    response.writeHead(404, {"Context-type": "text/plain"});
    response.write("404 file not found!");
    response.end();
}

function onRequest(request, response) {
    try {
        var pathname = url.parse(request.url).pathname;

        // Print the name of the file for which request is made.
        console.log("Request for " + pathname + " received.");

        // Read the requested file content from file system
        if (request.method == 'GET' && request.url == '/') {
            pathname = "./index.html";
        }
        else
            pathname = pathname.substr(1);

        fs.readFile(pathname, function (err, data) {
            if (err) {
                console.log(err);
                send404(response);
            }
            else if (pathname.indexOf('png')>=0) {
                response.writeHead(200, {'Content-Type': 'image/png'});
                response.write(data.toString());
            }
            else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data.toString());
            }
            // Send the response body
            response.end();
        });
    } catch (err) {
        console.log(err);
    }
}
// handle user request
/*function onRequest(request, response) {
 if(request.method=='GET' && request.url=='/')
 {
 response.writeHead(200, {"Context-type":"text/html"});
 fs.createReadStream('./public/index.html').pipe(response);
 }
 else
 {
 send404(response);
 }
 }*/


http.createServer(onRequest).listen(8888);
console.log("server started!");