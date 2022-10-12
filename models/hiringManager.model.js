var mongoose = require("mongoose");
const bcrypt = require('bcrypt')
var userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Email address is required'],
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true
    },
    is_verified: {
        type: Boolean,
        defaultValue: false,
    },
});
userSchema.pre("save", function (next) {
    const password = this.password
    const hash = bcrypt.hashSync(password, 10)
    this.password = hash
    next()
})

userSchema.methods.comparePass = function (password, hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = mongoose.model('user', userSchema);