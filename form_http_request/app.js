const exprees = require('express');
var bodyParser = require("body-parser");
const app = exprees();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/users',(req, res)=>{
    const {id, name} = req.body;
    res.send(`${id} , ${name}`)
})

app.get('/register', (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/register', (req, res)=>{
    const {name, age} = req.body;
    res.send(`FullName: ${name} && Age: ${age}`);

})

app.get('/', (req, res)=>{
    res.send(`hoem route`)
})

app.get('*',(req, res)=>{
    res.send(`404 Not Found`);
})


module.exports = app;