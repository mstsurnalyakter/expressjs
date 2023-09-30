const express = require('express');
const app = express();

app.get("/products/:id([0-9]{3})", (req, res) => {
  res.send(`<h1>Id = ${req.params.id}</h1>`);
});

app.get('/products/:title([a-zA-Z0-9]+)', (req, res)=>{
    res.send(`<h1>Title = ${req.params.title}</h1>`)
})

app.use('*', (req, res)=>{
    res.send(`<h1>404 Not Found</h1>`)
})


module.exports = app;