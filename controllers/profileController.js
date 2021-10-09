const Service = require('../services');

const getProfile = (req, res) => {
    console.log('Hit the Profile Controller');
    Service.ProfileService.getProfile(req, res);
}

module.exports = { getProfile }