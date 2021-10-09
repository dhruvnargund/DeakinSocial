let client = require("../initdb");
const path = require("path");

const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getSignUp = (res) => {
    res.sendFile(path.join(__dirname, '../public', 'signUp.html'));
}

const postSignUp = (req, res, next) => {
    bcrypt.hash (password, 10, function(err, hashedPass) {
        if(err) {
            res.json({
                error: err.message
            })
        }
    })

    let user = new User({
        username: req.body.username,
        fullName: req.body.fullName,
        email: req.body.email,
        campus: req.body.campus,
        password: req.body.password,
    })
    
    user.save()
    .then(user => {
        res.json({
            message: 'User added.'
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
}

module.exports = {
    getSignUp,
    postSignUp
}