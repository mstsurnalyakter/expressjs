const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send(`<h1>Home routes</h1>`)
})

module.exports = app;