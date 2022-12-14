const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    hiringManager: String,
    logo: {
        type: String,
        trim: true,
        required: true,
    },
    jobDescription: {
        type: String,
        trim: true,
        required: true,
        max: 2500
    },
    salaryRange: {
        type: String,
        required: true,
        min: 500,
    },
    role: {
        type: String,
        required: true,
        trim: true
    },
    deadline: {
        type: String,
        required: true,
    },
    is_verified: {
        type: Boolean,
        defaultValue: true,
    },
});


module.exports = mongoose.model('jobs', jobSchema);