const path = require("path");

const getForgotPass = (res) => {
    res.sendFile(path.join(__dirname, '../public', 'forgotPassword.html'));
}

module.exports = {
    getForgotPass
}