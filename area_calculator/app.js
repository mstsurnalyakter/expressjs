const exprees = require('express');
const bodyParser = require('body-parser');
const app = exprees();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/',(req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

// circle route start here
app.get('/circle', (req, res)=>{
    res.sendFile(__dirname + "/views/circle.html")
})

app.post('/circle', (req, res)=>{
    const {radius} = req.body;
    const area = 3.1416 * radius * radius;
    res.send(`<h1>Area of Circle: ${area}</h1>`)
})

// circle end here

// triangle starts here

app.get('/triangle', (req, res)=>{
    res.sendFile(__dirname + '/views/triangle.html')
})

app.post('/triangle', (req, res)=>{
    const {base, height} = req.body;
    const area = 0.5 * height * base;
    res.send(`<h1>Area of Triangle: ${area}</h1>`)

})

// triangel end here

module.exports = app;