// Example route file for users during registration and login

/* The following is used to retrieve the necessary model */
// const {User, validation} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Creating an account ...
router.post('/', (req, res) => {
    //...
});

// Retrieving an account ...
// Placeholder to see functionality
router.get('/', (req, res) => {
    res.send("Server is functioning");    
});

module.exports = router;