const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require('./routes/users.route');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/users",userRouter);



// home routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// route not found
app.use((req, res, next) => {
  res.send(`<h1>404 Not Found</h1>`);
});

// server error route
app.use((err, req, res, next) => {
  res.status(500).send(`<h1>Something broke!</h1>`);
});

module.exports = app;
