module.exports = {
    handleError: (error, req, res, next) => {
        return res.send(error.message)
    }
}