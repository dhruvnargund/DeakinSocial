const express = require('express');
const router = express.Router();
var Controllers = require("../controllers");

router.get('/', (res) => {
    Controllers.signInController.getSignIn(res);
});

router.post('/', (req,res) => {
    Controllers.signInController.postSignIn(req,res);
});

module.exports = router;