let Service = require("../services");

const resetPass = (res) => {
    console.log('in resetPassController')
    Service.resetPassService.getResetPass(res)
}

module.exports = {
    resetPass
}