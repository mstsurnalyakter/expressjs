const express = require('express');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const userRoutes = require('./routes/users.routes')
app.use(bodyParser.json());

app.use('/api/users/', userRoutes)


app.get('/about', (req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/contact', (req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + '/views/contact.html')
})

app.get('/feedback', (req, res)=>{
    res.statusCode  = 200;
    res.sendFile(__dirname + '/views/feedback.html')
})


app.get('/query', (req, res)=>{
    // query parameter start

    // const id = req.query.id;
    // const studentName = req.query.name;
    // res.send(`<h1>Student name :${studentName}, id:${id}</h1>`);
    const {id, name} = req.query;
    res.send(`<h1>Student name :${name}, id:${id}</h1>`);

    // query parameter end

})


// route parameter start here

app.get("/id/:id/name/:name", (req, res) => {
    const {id, name}= req.params
    res.send(`<h1>Student name is :${name}, id:${id}</h1>`);
});
// route parameter end here

// header parameter start here

app.get("/", (req, res) => {
    const id = req.header('id');
    const name = req.header('name');
    res.send(`<h1>Student name is :${name}, id:${id}</h1>`);
});
// header parameter end here

//json data(body-parser) start here

app.post('/users', (req, res)=>{
    const {name, id} = req.body
    res.send(`${id} && ${name}`);
})

//json data(body-parser) end here



app.get('*',(req, res)=>{
    res.send(`404 Not Found`);
})




module.exports = app;