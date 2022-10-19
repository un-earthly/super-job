const { userLogin, userSignUp, userInfo } = require("../controllers/auth.controller");

const router = require("express").Router()

router.post("/login", userLogin)
router.post("/signup", userSignUp);
router.get("/me", userInfo);

module.exports = router