module.exports = function (req, res, next) {
    if (req.session.token == undefined) {
        next()
    } else {
        res.status(403).json({ message: 'Not allowed' })
    }
}