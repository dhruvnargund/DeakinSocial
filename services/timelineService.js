let client = require('../initdb');
// const path = require('path');

const getTimeline = (req, res) => {
    // Insert db request here. Test hit and params below for now
    console.log('Hit the Timeline Service');
    res.send('Welcome to ' + req.params.id + '\'s timeline');
    // res.send(req.params);
    // res.sendFile(path.join(__dirname, '../public', 'signUp.html'));
}

module.exports = { getTimeline }