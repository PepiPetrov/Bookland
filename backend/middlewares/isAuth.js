module.exports = function (req, res, next) {
    if (req.session.token !== undefined) {
        console.log(req.session.token);
        console.log('here');
        next()
    } else {
        res.status(401).json({ message: 'Not authorized' })
    }
}