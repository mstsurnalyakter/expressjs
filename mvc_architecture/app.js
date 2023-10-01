const express = require('express');
const app = express();

const userRouter = require("./routes/users.route");
const productRouder = require("./routes/products.route")


app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productRouder)

app.use((req, res, next) => {
  res.status(404).json({
    message: "resource not found",
  });
});

module.exports = app;