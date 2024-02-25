// 3rd METHOD
// stream.pipe() method used to take a readable stream and connect it to a writeable stream
//incomming speed of data correspond to writing speed

const http = require('http')
const server = http.createServer();
server.on("request", (req, res)=>{
    const fs = require('fs')
    const rStream = fs.createReadStream('input.txt')
    rStream.pipe(res)
    res.end("\n done----------!!!")

})
server.listen(8500, '127.0.0.1', ()=>{
    console.log('server is running at port 8500')
})