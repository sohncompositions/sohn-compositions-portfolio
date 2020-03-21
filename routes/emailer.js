const express = require('express');

const emailerRoute = express.Router();

emailerRoute.route('/')
    .post((req, res) => {
        res.status(200).send({
            content: req.body
        })
    })

module.exports = emailerRoute;