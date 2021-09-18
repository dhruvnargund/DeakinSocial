let client = require("../initdb");

const getSignIn = (res) => {
    res.send("You have reached the Sign In page.");
}

module.exports = {
    getSignIn
}