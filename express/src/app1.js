const express = require('express');

const app = express();
const PORT = 8000;

app.get('/', (req, res)=> {
    res.send('<h1>Wellcome to my Home Page, Greeting!!! from Express</h1>')
 })
app.get('/about', (req, res)=> {
    res.write("<h3>Hello you are in About page</h3>")
    res.write('<h4>I am Visheshta Kushwaha,  software developer by profession</h4>')
    res.send();
})
app.get('/temp', (req, res)=> {
    res.status(200).send('Hello you are in Temp page,Todays temperature 20 degree celcius')
})
app.get('/contact', (req, res)=> {
    // res.send([
    //     {
    //     id: 1,
    //     name: 'visheshta'
    //     },
    //     {
    //     id: 2,
    //     name: 'Kushwaha'
    //     },
    // ])
    res.json([
        {
        id: 1,
        name: 'vish'
        },
        {
        id: 2,
        name: 'Kush'
        },
    ])
})
// res.send([{},{}]) and res.json([{},{}]) menthods are identical when an object or array is passed, but res.json() will also convert non-objects, such as null and undefined, which are not a valid json

app.listen(PORT, ()=>{
    console.log(`listening the port from ${PORT}`)
})