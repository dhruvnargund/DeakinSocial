const express = require('express');
const router = express.Router();

const FriendsController = require('../controllers/friendsController.js');

router.get('/', (req, res) => {
    console.log('Hit the freinds Router');
    FriendsController.addFriend(req, res);
})

module.exports = router;