//add static website to the home path

const express = require('express');
const path = require('path');

const app = express();

const PORT = 8000;
const staticPath = path.join(__dirname, "../public")

// buildin middleware
//add static website to the home path
app.use(express.static(staticPath))

app.get('/about', (req, res)=> {
    res.set("Content-Type", "text/html");
    res.write("<h3>Hello you are in About page</ h3>")
    res.send();
})

app.listen(PORT, ()=>{
    console.log(`listening the port from ${PORT}`)
})