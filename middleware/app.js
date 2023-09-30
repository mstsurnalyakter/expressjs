const express = require("express");
const app = express();

app.use((req, res, next)=>{
    res.send(`<h1>404 Not Found</h1>`)
});

app.use((err, req, res, next)=>{
    res.status(500).send(`<h1>Something broke!</h1>`)
})

const myFunction = (req, res, next) => {
  console.log(`middleware`);
  req.currentTime = new Date(Date.now());

  next();
};

const commonMiddleware = (req, res, next) => {
  req.authorName = "Mst Surnaly Akter";
  next();
};

app.use(commonMiddleware);

app.get("/", myFunction, (req, res) => {
  console.log(
    `Author name is ${req.authorName}. Hoem route ${req.currentTime}`
  );
  res.send(
    `<h1>Home route || Author Nam is ${req.authorName} <br><br>  Current Date is ${req.currentTime}</h1>`
  );
});

app.get("/about", (req, res) => {
  res.send(
    `<h1>About Routes || Author name is ${req.authorName} <br><br>  ${req.currentTime}</h1>`
  );
});

// app.get("*", (req, res) => {
//   res.send(`<h1>404 Not Found</h1>`);
// });

module.exports = app;
