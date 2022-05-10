const express = require('express');
const User = require('./users/model')
const server = express();


server.get("/api/users", (req, res) => {
    User.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).json({
                message: 'error getting users',
                err: err.message,
            })
        })
})


module.exports = server;
