const express = require('express');
const router = express.Router();

var Controllers = require('../controllers');

router.get('/', (req, res) => {
    Controllers.profileController.getProfile(res);
})

//router.get('/:id', (req, res) => {
  //  console.log('Hit the Profile Router');
    //ProfileController.getProfile(req, res);
//});

module.exports = router;