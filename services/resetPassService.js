const path = require("path");

const getResetPass = (res) => {
    res.sendFile(path.join(__dirname, '../public', 'resetPassword.html'));
}

module.exports = {
    getResetPass
}