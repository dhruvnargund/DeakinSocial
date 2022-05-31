let Service = require("../services");

const getChatBot = (res) => {
    console.log('in chatBotController')
    Service.chatBotService.getChatBot(res)
}

const postChatBot = (req,res) => {
    console.log('in chatBotController')
    Service.chatBotService.postChatBot(req,res)
}

module.exports = {
    getChatBot, postChatBot
}