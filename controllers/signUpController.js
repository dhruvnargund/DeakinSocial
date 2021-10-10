let Service = require("../services");

const postSignUp = (req,res) => {
    console.log('in signUpController')
    Service.signUpService.postSignUp(req,res)
}

const getSignUp = (res) => {
    console.log('in signUpController')
    Service.signUpService.getSignUp(req,res)
}

module.exports = {
    postSignUp,
    getSignUp
}