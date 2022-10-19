const { jwtGen } = require("../middlewares/jwt")
const userModel = require("../models/user.model")

module.exports = {

    userSignUp: (req, res, next) => {
        userModel.create(req.body)
            .then(userData => {
                const token = jwtGen(JSON.stringify(userData))
                res.send({ userData, token })
            })
            .catch(err => res.json({ err }))

    },
    userLogin: async (req, res) => {
        const user = await userModel.findOne({ email: req.body.email })
        const correctPass = user.comparePass(req.body.password, user.password)
        correctPass ?
            res.send({ token: jwtGen({ email: user.email }) }) :
            res.send({ err: "password dosen't match" })
    },
    userInfo: async (req, res) => {
        const user = await userModel.findOne({ email: req.userEmail })
        res.send({ user })
    }


}