const express = require('express');
const router = express.Router();
var Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.forgotPassController.forgotPass(res);
});

module.exports = router;