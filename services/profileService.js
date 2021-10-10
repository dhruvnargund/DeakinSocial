const User = require('../models/user');
const Post = require('../models/post');

const postComment = (req, res) => {
    let post = new Post({
        username: req.body.username,
        content: req.body.comment
    });
    post.save();
}


const getAllProfiles = (req, res) => {
    console.log('Hit the Profile Service');
    // Insert db request here.
    Post.find().then((result) => res.render('profile', {
        // pass request results to pug page
        owner: req.params.id,
        result
    }))
        .catch((err) => console.log("Error:", err));
}

const getProfile = (req, res) => {
    console.log('Hit the specific profile service');
    User.findOne({ username: req.params.id }).then((result) => res.send(result)).catch((err) => console.log("Error:", err));
}

module.exports = { getAllProfiles, getProfile, postComment };