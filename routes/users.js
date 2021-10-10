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