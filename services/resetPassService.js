let client = require("../initdb");

const getResetPass = (res) => {
    res.send("You have reached the Reset Password page.");
}

module.exports = {
    getResetPass
}