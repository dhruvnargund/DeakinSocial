const User = require('../models/user');

const getAllProfiles = (req, res) => {
    console.log('Hit the Profile Service');
    // Insert db request here.
    User.find().then((result) => res.send(result)).catch((err) => console.log("Error:", err));
    
    // res.render('profile', {
    //     // pass request results to pug page
    //     owner: req.params.id
    // });
}

const getProfile = (req, res) => {
    console.log('Hit the specific profile service');
    User.findOne({username: req.params.id}).then((result) => res.send(result)).catch((err) => console.log("Error:, err"));
}

module.exports = { getAllProfiles, getProfile }
