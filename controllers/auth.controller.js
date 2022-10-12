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
    userLogin: () => { },
    userInfo: () => { }


}