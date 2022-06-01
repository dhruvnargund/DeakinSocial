const express = require('express');
const router = express.Router();
var Controllers = require("../controllers");

router.get('/', (req, res) => {
    /* Deliver HTML */
    Controllers.chatBotController.getChatBot(res);
});

router.post('/', (req,res) => {
    /* Authenticate and send to TIMELINE */
    Controllers.chatBotController.postChatBot(req,res);
});

module.exports = router;