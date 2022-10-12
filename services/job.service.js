const jobModel = require("../models/job.model.js")

exports.jobServices = {
    getAllJob: () => {

        if (filters.length > 0 && excludeField.length > 0) { excludeField.forEach(q => delete filters[q]) }

        jobModel.find()
            // .select("-__v, -password")
            // .sort(sort)
            // .skip(page * limit)
            // .limit(limit)
            .then(jobs => jobs)
            .catch(err => err)
    },
    createAJob: async (jobData) => {
        const createAJob = await jobModel.create(jobData)
        return createAJob
    }
}