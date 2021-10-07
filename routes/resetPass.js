const express = require('express');
const router = express.Router();
var Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.resetPassController.resetPass(res);
});

module.exports = router;