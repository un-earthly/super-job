const jobServices = require("../services/job.service")
const jobDRY = require("../utils/DRY")

module.exports = {

    getHighestPaidJobs: () => { },
    getMostAppliedJobs: () => { },


    getAllJobs: (req, res) => {
        jobDRY(jobServices.getAllJob(), res)
    },
    getAJobUser: (req, res) => {
        jobDRY(jobServices.getAJob(req.params.id), res)
    },
    applyToAJob: () => { },




    getAllJobForManager: async (req, res) => {
        // res.send({ data: req.userEmail })
        // jobServices.getAllJob(req.userEmail)
        // console.log(req.userEmail)
        // jobDRY(jobServices.getAllJob({
        //     "hiringManager": {
        //         $elemMatch: { email: req.userEmail }
        //     }
        // }), res)

        res.send(await jobServices.getAllJob({ hiringManager: req.userEmail }))
    },
    getAJobForManager: (req, res) => {
        jobDRY(jobServices.getAJob(req.params.id), res)
    },
    createAJob: (req, res) => {
        const jobData = req.body
        jobData.hiringManager = req.userEmail
        jobDRY(jobServices.createAJob(jobData), res)
    },
    updateAJobForManager: () => { },
    deleteAJob: () => { },

}