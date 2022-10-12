const { getAllCandidate, getACandidate, getAllManager, updateToManager } = require("../controllers/admin.contoller")

const router = require("express").Router()

router.get("candidate", getAllCandidate)
router.get("candidate/:id", getACandidate)
router.get("manager", getAllManager)
router.get("to-manager/:id", updateToManager)

module.exports = router