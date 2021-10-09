const express = require('express');
const router = express.Router();
var Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.signUpController.getSignUp(res);
});

router.post('/', (req,res) => {
    Controllers.signUpController.postSignUp(req,res);
});

module.exports = router;