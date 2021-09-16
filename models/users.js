// Dependencies here, example:
const mongoose = require("mongoose");

// UserSchema here, example:
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    password: {
        type: String,
        required: true,
        maxlength: 2000
    }
});

const User = mongoose.model("User", userSchema);

function validateUser(user) {
    // validate
};

exports.User = User;
exports.validation = validateUser;
