const jobModel = require("../models/job.model.js")

module.exports.getAllJob = (query) => {
    console.log(query)
    const data = jobModel.find(query)
    return data
}



module.exports.getAJob = (id) => {
    const data = jobModel.findById(id).select("-__v")
    return data
}


module.exports.createAJob = async (jobData) => {
    const createAJob = await jobModel.create(jobData)
    return createAJob
}
