const express = require('express');
const router = express.Router();
var Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.signUpController.signUp(res);
});

module.exports = router;