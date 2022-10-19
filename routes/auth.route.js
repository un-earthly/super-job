const { userLogin, userSignUp, userInfo } = require("../controllers/auth.controller");
const { verifyJwt } = require("../middlewares/jwt");

const router = require("express").Router()

router.post("/login", userLogin)
router.post("/signup", userSignUp);
router.get("/me", verifyJwt, userInfo);

module.exports = router