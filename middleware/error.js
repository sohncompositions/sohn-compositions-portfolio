module.exports = {
    handleError: (error, req, res, next) => {
        res.send({ error: error.message })
    }
}