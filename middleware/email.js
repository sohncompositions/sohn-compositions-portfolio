module.exports = {
    validateEmail: (req, res, next) => {
        if (req.body.sender && req.body.name && req.body.subject && req.body.message) return next();

        res.status(400);
        return next(Error('Request body is invalid. Email must contain a sender, name, subject, and message field'));
    }
}



