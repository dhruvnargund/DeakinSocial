const express = require('express');
const router = express.Router();

const TimelineController = require('../controllers/timelineController');
// const controller = new TimelineController();

router.get('/', (req, res) => {
    res.send('You arrived at the timeline. This is a placeholder');
})

router.get('/:id', (req, res) => {
    // controller.getTimeline(req, res);
    console.log('Hit the Timeline Router');
    TimelineController.getTimeline(req, res);
});

module.exports = router;