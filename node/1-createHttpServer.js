// Node.js web Server

// to access web pages of any web application, you need a web Server. the web server will handle all the http requests for the web application
// eg: IIS is a web page for AssertionError.NET web appliaction and Apache is a web server for PHP or java web application
// Node.js provides capabilities to create your own web server which will handle HTTP requests aysnchronously. you can use IIS or Apache to run Node.js web application but it is recommented to use Node.js web server.

// to use the HTTP server and client one must require('http')
const http = require('http')

// the http.createServer() method includes request and response parameters which is supplied by Node.js.
const server = http.createServer((req, res)=>{
    res.end('creating node js web server')
})

// the request object can be used to get information about the current HTTP request.
// e.g. url, request Headers, and data.

// the response object can be used to send a response for a current Http request. If the reponse from the http server is supposed to be displayed as html, you should include an HTTP header with correct content type.

server.listen(8500, '127.0.0.1', ()=>{
    console.log('listening to port 8500')
})

//127.0.0.1 ip address of local host
// http://localhost:8500/