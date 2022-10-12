const { getHighestPaidJobs, getMostAppliedJobs, getAllJobs, applyToAJob } = require("../controllers/job.contoller");

const router = require("express").Router()

router.get("/", getAllJobs)
router.get("/:id/apply", applyToAJob)
router.get("/highest-paid", getHighestPaidJobs)
router.get("/most-applied", getMostAppliedJobs)

module.exports = router