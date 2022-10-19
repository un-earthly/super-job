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
    userLogin: async (req, res, next) => {
        // userModel.create(req.body)
        //     .then(userData => {
        //         const token = jwtGen(JSON.stringify(userData))
        //         res.send({ userData, token })
        //     })
        //     .catch(err => res.json({ err }))
        const user = await userModel.findOne({ email: req.body.email })

        const correctPass = user.comparePass(req.body.password, user.password)
        // .then(data => res.send({ data: comparePass(req.body.password, data.password) }))
        // console.log(req.body)

        correctPass ? res.send({ token: jwtGen({ email: user.email }) }) : res.send({ err: "password dosen't match" })
    },
    userInfo: () => { }


}