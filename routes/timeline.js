const express = require('express');
const router = express.Router();

const TimelineController = require('../controllers/timelineController');
// const controller = new TimelineController();

router.get('/', (req, res) => {
    TimelineController.getTimeline(req, res);
})


module.exports = router;