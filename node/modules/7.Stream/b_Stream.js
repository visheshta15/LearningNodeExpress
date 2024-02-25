// 2nd METHOD 
// reading from a Stream
// create a readable Stream
// handle stream events --> DataCue, end and error

const http = require('http')
const server = http.createServer();
server.on("request", (req, res)=>{
    const fs = require('fs')

    const rstream = fs.createReadStream('inpu1t.txt')
    rstream.on('data', (chunkData)=>{
        res.write(chunkData)
    })
    rstream.on('finish', ()=>{
        res.end("\n done----------!!!")
    })
    rstream.on('end', ()=>{
        res.end("\n -----end------")
    })
    rstream.on('error', (err)=>{
        res.end('file not found')
        console.log(err)
    })

})
server.listen(8500, '127.0.0.1', ()=>{
    console.log('server is running at port 8500')
})