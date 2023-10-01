const {join} = require('path');
const products = require('../models/products.modles')

exports.getProducts = (req, res) =>{
    res.sendFile(join(__dirname + "/../views/products.html"));
}

exports.saveProducts = (req, res) =>{
    const name = req.body.name;
    const price = Number(req.body.price);
    const product = {
        name,
        price
    };
    products.push(product);
    res.status(201).json({
        success:true,
        products
    })
}
