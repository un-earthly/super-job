const { jobServices } = require("../services/job.service")



module.exports = {

    getHighestPaidJobs: () => { },
    getMostAppliedJobs: () => { },


    getAllJobs: () => { },
    getAJob: () => { },
    applyToAJob: () => { },




    getAllJobForManager: async (req, res) => {
        console.log(req.user)
        const jobs = jobServices.getAllJob()
        res.send({ jobs })
    },
    getAJobsForManager: () => { },
    createAJob: (req, res) => {

        jobServices.createAJob(req.body)
            .then(data => res.send({ data }))
            .catch(err => res.send({ err }))
    },
    updateAJobForManager: () => { },
    deleteAJob: () => { },

}