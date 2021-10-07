let client = require("../initdb");
const path = require("path");

const getSignIn = (res) => {
    res.sendFile(path.join(__dirname, '../public', 'signIn.html'));
}

module.exports = {
    getSignIn
}