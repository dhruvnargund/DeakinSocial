const Service = require('../services');

const submitPost = (req, res) => {
    console.log('Hit the Timeline Controller');
    Service.PostService.submitPost(req, res);
}

module.exports = { submitPost }