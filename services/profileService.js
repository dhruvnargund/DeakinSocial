let client = require('../initdb');
const path = require("path");

const getProfile = (res) => {
    // Insert db request here. Test hit and params below for now
    //console.log('Hit the Profile Service');
    //res.send('Welcome to ' + req.params.id + '\'s profile');

    res.sendFile(path.join(__dirname, './public', 'profile.html'));
}

module.exports = {
     getProfile 
    
}