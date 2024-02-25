//routing , handle http request

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("1111", req.url)
    if(req.url == '/'){
        res.end('hello ----------- from the home page')
    }else if(req.url == '/about') {
        res.end('hello from about us page')
    }else{
        res.writeHead(
            404,
            { "Content-type": 'text/html'}
        )
        res.end('<h1>404 error page</h1>')
    }
})

server.listen(8500, '127.0.0.1', ()=>{
    console.log('listening to port 8500')
})  