const Service = require('../services');

const submitPost = (req, res) => {
    console.log('Hit the Posts Controller Submit Post');
    Service.PostService.submitPost(req, res);
}
const getAllPosts = (req, res) => {
    console.log('Hit the Posts Controller Get AllPosts');
    Service.PostService.getAllPosts(req, res);
}

module.exports = { getAllPosts, submitPost }