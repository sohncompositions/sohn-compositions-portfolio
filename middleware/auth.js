module.exports = {
    validateApiKey: (req, res, next) => {
        if (req.query.apiKey === process.env.API_KEY) return next();

        res.status(401);
        return next(Error('Invalid API key'));
    }
}

