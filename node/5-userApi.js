const http = require('http')
const fs = require('fs')
console.log(__dirname)
console.log(`${__dirname}/userData.json`)

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.end('hello ----------- from the home page')
        console.log('jhkjhk')
    }else if(req.url == '/userapi'){
        const a = fs.readFileSync(`${__dirname}/userData.json`, 'utf-8', (err, data)=> {
            console.log(err)
        })
        res.end(a)
    }else{
        res.writeHead(
            404,
            {'Content-type' : 'text/html'}
        )
        res.end('<h1>404 error page </h1>')
    }
})



server.listen(8000, ()=>{
    console.log('listening to port 8000')
})