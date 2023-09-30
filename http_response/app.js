const express = require('express')
const app = express();
const userRoute = require('./routes/users.routes');


app.use('/api/users', userRoute);

app.get('/registration',(req, res)=>{
    res.status(200).send({
        "message":"registration is successfully",
        statusCode:200
    })
})


app.get('/redirect', (req, res)=>{
    res.redirect("/registration")
})


app.get('/about', (req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/about.html")
})


app.get('/', (req, res)=>{
    res.send(`<h1>Home routes</h1>`);
})



app.get('*',(req, res)=>{
    res.send(`<h1>404 Not Found</h1>`);
})


module.exports = app;