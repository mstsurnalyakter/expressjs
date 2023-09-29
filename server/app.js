const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.send(`<h1>hello get method</h1>`);
})

app.get('/about', (req, res)=>{
    res.send(`<h1>about route</h1>`);
})

app.get('/contact', (req, res)=>{
    res.send(`<h1>contact route</h1>`)
})

app.get('/feedback',(req, res)=>{
    res.send(`<h1>Feedback</h1>`)
})

app.get('*', (req, res)=>{
    res.send(`<h1>404 Not Found</h1>`)
})

app.post('/', (req, res)=>{
    res.send(`<h1>this post method</h1>`)
})

app.put('/', (req,res)=>{
    res.send(`<h1>put method</h1>`)
})

app.delete('/', (req,res)=>{
    res.send(`<h1>delete method</h1>`)
})

app.patch('/', (req, res)=>{
    res.send(`<h1>patch method</h1>`)
})

module.exports = app;