const { getAllJobForManager, updateAJobForManager, createAJob, getAJobForManager } = require("../controllers/job.contoller");
const { verifyJwt } = require("../middlewares/jwt");
const router = require("express").Router();

router
    .route("/")
    .get(verifyJwt, getAllJobForManager)
    .post(verifyJwt, createAJob)
router
    .route("/:id")
    .get(verifyJwt, getAJobForManager)
    .patch(verifyJwt, updateAJobForManager);


module.exports = router