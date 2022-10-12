const landingController = require("../controllers/landing.controller")

const router = require("express").Router()


router.get("/", landingController)

module.exports = router