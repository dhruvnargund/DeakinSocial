const Service = require('../services');

const getProfile = (req, res) => {
    console.log('Hit the Timeline Controller');
    Service.ProfileService.getProfile(req, res);
}

module.exports = { getProfile }