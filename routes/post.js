const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostController');

router.get('/', (req, res) => {
    res.send('You attempted to post.');
})

router.get('/:id', (req, res) => {
    console.log('Hit the post Router');
    PostController.getPost(req, res);
});

module.exports = router;