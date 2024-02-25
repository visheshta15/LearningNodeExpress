const http =   require('http');
const fs = require("fs");
const requests = require('requests');
const PORT = 8000

const express = require("express");
var app = express();
var path = require('path')
app.use('/css', express.static(path.join(__dirname, '')));
// app.use(express.static(path.join(`${__dirname}\\style.css`)));
// console.log("hi", `${__dirname}\\style.css`)
var assets = path.join(__dirname,'style.css');
var assets1 = path.join(__dirname,'');
console.log(assets)
console.log(assets1)


const indexHtmlFile = fs.readFileSync('index.html', 'utf-8')
const API_key = "8c0331adcaf6f089e4da2ccc768fa718";
const city_name = "Kanpur";
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`
const url = "https://api.openweathermap.org/data/2.5/weather?q=kanpur&appid=8c0331adcaf6f089e4da2ccc768fa718"

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    return temperature;
};

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        requests(url)
        .on("data", (chunk)=>{
            const apiResponse = JSON.parse(chunk)
            const apiResponseArray = [apiResponse];
            const realTimeData = apiResponseArray.map((val)=> replaceVal(indexHtmlFile, val)).join("")
            res.write(realTimeData);     
            // console.log("chunk --- " ,chunk)
            // console.log("apiResponse --- " ,apiResponse)
            // console.log("apiResponseArray --- " ,apiResponseArray)
            // console.log("indexHtmlFile --- " ,indexHtmlFile)
            // console.log("realTimeData --- " ,realTimeData)
        })
        .on('end', (err) =>{
            if(err) return console.log('connection closed due to errors', err);
            console.log('end')
            res.end()
        })
        // res.end()
    }
})

server.listen(PORT,'127.0.0.1', ()=>{
    console.log(" server is running at port", PORT)
});