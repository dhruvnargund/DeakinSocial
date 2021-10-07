const Service = require('../services');

const getProfile = (req, res) => {
    console.log('in profileController');
    Service.ProfileService.getProfile(res);
}

module.exports = { 
    getProfile 
}