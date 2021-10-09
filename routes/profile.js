const express = require('express');
const router = express.Router();

const ProfileController = require('../controllers/profileController');

router.get('/', (req, res) => {
    console.log('Hit the Profile Router');
    ProfileController.getProfile(req, res);
})

router.get('/:id', (req, res) => {
    console.log('Hit the Profile Router');
    ProfileController.getProfile(req, res);
});

module.exports = router;