let client = require("../initdb");
const path = require("path");

const getSignUp = (res) => {
    res.sendFile(path.join(__dirname, '../public', 'signUp.html'));
}

module.exports = {
    getSignUp
}