const { getAllJobForManager, getAJobsForManager, updateAJobForManager } = require("../controllers/job.contoller");
const { verifyJwt } = require("../middlewares/jwt");
const router = require("express").Router();

router.get("/", verifyJwt, getAllJobForManager)
router
    .route("/jobs/:id")
    .get(verifyJwt, getAJobsForManager)
    .patch(verifyJwt, updateAJobForManager);


module.exports = router