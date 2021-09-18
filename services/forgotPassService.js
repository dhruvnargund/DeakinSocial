let client = require("../initdb");

const getForgotPass = (res) => {
    res.send("You have reached the Forgot Password page.");
}

module.exports = {
    getForgotPass
}