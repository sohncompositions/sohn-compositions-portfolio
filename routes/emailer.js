const express = require('express');
const emailService = require('../services/email');
const { validateEmail } = require('../middleware/email')

const emailerRoute = express.Router();

emailerRoute.route('/')
    .post(validateEmail, async (req, res, next) => {
        try {
            await emailService.sendEmail(req.body)
            return res.status(200).send({
                message: `Email successfully sent `
            })
        } catch (err) {
            res.status(500);
            return next(err);
        }
    });

module.exports.emailerRoute = emailerRoute;