const express = require('express');
const router = express.Router();
var Controllers = require("../controllers");

router.get('/', (req,res) => {
    Controllers.searchController.getSearch(req,res);
});

router.post('/', (req,res) => {
    Controllers.searchController.postSearch(req,res);
});

module.exports = router;