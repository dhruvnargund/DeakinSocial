const Service = require('../services');

const getAllProfiles = (req, res) => {
    console.log('Hit the Profile Controller');
    Service.ProfileService.getAllProfiles(req, res);
}

const getProfile = (req, res) => {
    console.log('Hit the Profile Controller');
    Service.ProfileService.getProfile(req, res);
}

module.exports = { getAllProfiles, getProfile }