const express = require('express');
const router = express.Router();

router.get('/product1',(req, res)=>{
    res.send(`<h1>Product 1</h1>`)
});

router.get('/product2', (req, res)=>{
    res.send(`<h1>product 2</h1>`);
})

module.exports = router;