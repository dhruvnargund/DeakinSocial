// Example route file for users during registration and login

/* The following is used to retrieve the necessary model */
// const {User, validation} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("You have reached the timeline.");    
});

module.exports = router;