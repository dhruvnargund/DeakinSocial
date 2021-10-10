const User = require('../models/user');

const getFriends = (req, res) => {
    console.log('Hit the friends service: get friends');
    // Insert db request here.
    // res.render('profile', {
    //     // pass request results to pug page
    //     owner: req.params.id
    // });
}

const addFriend = (req, res) => {
    console.log('Hit the friends service: add friend');
    var friend = {friendsUsername: 'bathomas'};
    User.findOneAndUpdate(
        { username: 'dnargund' }, 
        { $push: { friends: friend  } },
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log(success);
             }
         });
         res.send('Done');
}

const removeFriend = (req, res) => {
    console.log('Hit the friends service: remove friend');
    var friend = {friendsUsername: 'bathomas'};
    User.findOneAndUpdate(
        { username: 'dnargund' }, 
        { $pull: { friends: friend  } },
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log(success);
             }
         });
         res.send('Done');
}

module.exports = { getFriends, addFriend, removeFriend }