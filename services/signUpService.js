let client = require("../initdb");
const path = require("path");

const getSignUp = (req, res) => {
    res.render(path.join(__dirname, '../public', 'signUp.html'));
}

module.exports = {
    getSignUp
}