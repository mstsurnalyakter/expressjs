const express = require('express');
const app = express();
const usersRouter = require('./routes/users.routes');

app.use("/api/users",usersRouter);

app.get("/", (req, res) => {
  res.send(`<h1>This is home route</h1>`);
  res.end();
});

app.get('*', (req, res)=>{
    res.send(`<h1>404 Not Found</h1>`);
})

module.exports = app;