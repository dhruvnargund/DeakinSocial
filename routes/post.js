const express = require('express');
const router = express.Router();

const PostController = require('../controllers/postController');

router.get('/', (req, res) => {
    console.log('Hit the post Router with no id');
    PostController.getAllPosts(req, res);
})

router.get('/:id', (req, res) => {
    console.log('Hit the post Router');
    PostController.getPost(req, res);
});

module.exports = router;