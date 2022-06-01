const path = require("path");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs/dist/bcrypt");

const getChatBot = (res) => {
    res.sendFile(path.join(__dirname, '../public', 'chatbot.html'));
}

const postChatBot = (req, res, next) => {
    
}

module.exports = {
    getChatBot, postChatBot
}