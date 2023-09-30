const express = require('express')
const router = express.Router();


router.get('/registration', (req, res)=>{
    res.send(`Registration routes`)
})

router.get('/loggin', (req, res)=>{
    res.send(`loggin routes`)
})

 

module.exports = router;