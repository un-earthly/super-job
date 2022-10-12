const { userLogin, userSignUp, userInfo } = require("../controllers/auth.controller");

const router = require("express").Router()

router.get("/login", userLogin)
router.post("/signup", userSignUp);
router.post("/me", userInfo);

module.exports = router