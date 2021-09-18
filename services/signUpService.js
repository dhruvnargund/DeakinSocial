let client = require("../initdb");

const getSignUp = (res) => {
    res.send("You have reached the Sign Up page.");
}

module.exports = {
    getSignUp
}