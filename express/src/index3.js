//add dynamic website to the home path

const express = require('express');
const path = require('path');

const app = express();

const PORT = 8000;
const staticPath=path.join(__dirname,"../views");
app.set('views',staticPath);

// set the view engine
app.set("view engine", "hbs")

// template engine route
app.get("/", (req,res) => {
    res.render('index3', {
        userName: 'Visheshta...'
    })
})


app.get('/', (req, res)=> {
    res.send('<h1>Wellcome to my Home Page, Greeting!!! from Express</h1>')
 })

// top-to-bottom approach, whatever comes first will read and close/render 

app.listen(PORT, ()=>{
    console.log(`listening the port from ${PORT}`)
})