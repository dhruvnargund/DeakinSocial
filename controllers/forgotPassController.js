let Service = require("../services");

const forgotPass = (res) => {
    console.log('in forgotPassController')
    Service.forgotPassService.getForgotPass(res)
}

module.exports = {
    forgotPass
}