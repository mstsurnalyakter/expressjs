const {v4: uuidv4} = require('uuid');

const users = [
    {
        id:uuidv4(),
        userName:"Mst Surnaly Akte",
        email:"surnalyms@gmail.com"
    },
    {
        id:uuidv4(),
        userName:"Salma Begum",
        email:"salmabegum@gmail.com"
    },
    {
        id:uuidv4(),
        userName:"Nor Hosen",
        email:"norhosen@gmail.com"
    }
]

module.exports = users;