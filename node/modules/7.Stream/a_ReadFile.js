// this is like downloading and displaying

const http = require('http')
const fs = require('fs')

const server = http.createServer()
server.on('request', (req, res)=>{
    fs.readFile('input.txt', 'utf-8', (err, data)=>{
        if(err) return console.log(err)
        res.end(data)
    })
})
server.listen(8500, '127.0.0.1', ()=>{
    console.log('server is running at port 8500')
})