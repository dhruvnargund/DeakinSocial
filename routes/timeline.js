const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("You have reached the timeline.");    
});

module.exports = router;