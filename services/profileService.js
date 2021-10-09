let client = require('../initdb');

const getProfile = (req, res) => {
    console.log('Hit the Profile Service');
    // Insert db request here.
    res.render('profile', {
        // pass request results to pug page
        owner: req.params.id
    });
}

module.exports = { getProfile }