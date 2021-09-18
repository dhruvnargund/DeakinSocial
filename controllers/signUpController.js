let Service = require("../services");

const signUp = (res) => {
    console.log('in signUpController')
    Service.signUpService.getSignUp(res)
}

module.exports = {
    signUp
}