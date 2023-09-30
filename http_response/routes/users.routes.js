const express = require('express');
const router = express.Router();


router.get('/registration', (req, res)=>{
    res.send(`<h1>Registration routes</h1>`)
})

router.get('/loggin', (req, res)=>{
    res.send(`<h1>Loggin routes</h1>`);
})


module.exports = router;