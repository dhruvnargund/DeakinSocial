const User = require('../models/user');
const Post = require('../models/post');

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

const getProfile = (req, res, JWT) => {
    console.log('Hit the specific profile service');
    User.findOne({username: req.params.id}).then((result) => res.render('profile', {
        owner: req.params.id,
        result
    })).catch((err) => console.log("Error:", err));
}

module.exports = { getAllProfiles, getProfile }
