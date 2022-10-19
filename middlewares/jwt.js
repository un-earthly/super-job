const jwt = require("jsonwebtoken")
exports.jwtGen = (userData) => {
    const token = jwt.sign(userData, process.env.JWT)
    return token
}
exports.verifyJwt = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT)
            req.userEmail = decoded.email
            next()
        } catch (err) {
            return res.status(401).json({ err })
        }
    }
    else {
        res.send({ err: "no token found" })
    }
}