const mongoose = require('mongoose');
module.exports = {
    connectToDb: () => {

        mongoose
            .connect(process.env.URI)
            .then(() => console.log("Successfully connected to MongoDB."))
            .catch(err => console.log(err))
    },

};