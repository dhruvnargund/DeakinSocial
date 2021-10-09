let Service = require("../services");

const signIn = (res) => {
    console.log('in signInController')
    Service.signInService.getSignIn(res)
}

module.exports = {
    signIn
}