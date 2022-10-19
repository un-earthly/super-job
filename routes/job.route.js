const { getHighestPaidJobs, getMostAppliedJobs, getAllJobs, applyToAJob, getAJobUser } = require("../controllers/job.contoller");

const router = require("express").Router()

router.get("/", getAllJobs)
router.get("/:id", getAJobUser)
router.post("/:id/apply", applyToAJob)
router.get("/highest-paid", getHighestPaidJobs)
router.get("/most-applied", getMostAppliedJobs)

module.exports = router