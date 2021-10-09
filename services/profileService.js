let client = require('../initdb');

const getProfile = (req, res) => {
    // Insert db request here. Test hit and params below for now
    console.log('Hit the Profile Service');
    res.send('Welcome to ' + req.params.id + '\'s profile');
}

module.exports = { getProfile }