/* Dependencies */
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
let path = require('path');

/* Use env-defined port or default to 3000 */
let port = process.env.PORT || 3000;

/* Database connection */
const uri = process.env.DB_URL;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((res) => console.log('Connection to db established.'))
    .catch((err) => console.log('Error:', err));

/* Get database collection names for confirmation */
mongoose.connection.on('open', function () {
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        if (err) {
            console.log('Error:', err);
        } else {
            names.forEach(e => console.log('-', e.name))
        }
    })
})

/* Model Handling */
// const User = require('./models/user');

/* Create some data */
// const harshaUser = new User({
//     firstName: "Harsha",
//     lastName: "Reddy",
//     email: "hreddy@deakin.edu.au",
//     username: "hreddy",
//     password: "harshapass"
// })
// const dhruvUser = new User({
//     firstName: "Dhruv",
//     lastName: "Nargund",
//     email: "dnargund@deakin.edu.au",
//     username: "dnargund",
//     password: "dhruvpass"

// })
// const yashUser = new User({
//     firstName: "Yash",
//     lastName: "Kondlekar",
//     email: "ykondlekar@deakin.edu.au",
//     username: "ykondlekar",
//     password: "yashpass"

// })
// const benUser = new User({
//     firstName: "Ben",
//     lastName: "Thomas",
//     email: "bathomas@deakin.edu.au",
//     username: "bathomas",
//     password: "benpass"
// })
// const yashAddedUser = new User({
//     firstName: "abc",
//     lastName: "def",
//     email: "yash@ab.mail",
//     username: "ypk123",
//     password: "deakin725",
//     campus: "burwood",
//     bio: "from india"
// })

// harshaUser.save();
// dhruvUser.save();
// yashUser.save();
// benUser.save();
// yashAddedUser.save();

// const Post = require('./models/posts');
// const postOne = new Post({
//     username: "dnargund",
//     content: "This is some content that is awesome."
// });
// const postTwo = new Post({
//     username: "dnargund",
//     content: "This is some content that is better than awesome."
// });
// const postThree = new Post({
//     username: "bathomas",
//     content: "This is real Ben content."
// });
// const postFour = new Post({
//     username: "bathomas",
//     content: "Amazing Ben Content."
// });
// const postFive = new Post({
//     username: "bathomas",
//     content: "Amazing Ben Content.",
//         comments: {
//             comment: "Yeah, it's amazing!",
//             username: "dnargund"
//         }
// });
// postOne.save();
// postTwo.save();
// postThree.save();
// postFour.save();
// postFive.save();

/* Middleware JSON handling function for POST/PUT requests */
app.use(express.json());

/* Deliver static public facing */
app.use(express.static(path.join(__dirname, './app/public')));
app.use(express.urlencoded({extended: true}));

/* Add pug functionality */
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'pug');

/* Route Handling */
const timeline = require('./app/routes/timeline');
const profile = require('./app/routes/profile');
const signIn = require('./app/routes/signIn');
const signUp = require('./app/routes/signUp');
const search = require('./app/routes/search');
const friends = require('./app/routes/friends');

// const post = require('./routes/post');
// const users = require('./routes/users');

app.use('/profile', profile);
app.use('/signIn', signIn);
app.use('/signUp', signUp);
app.use('/search', search);
app.use('/friends', friends);
app.use('/', timeline);

// app.use('/resetPass', resetPass);
// app.use('/forgotPass', forgotPass);
// app.use('/timeline', timeline);
// app.use('/post', post);

app.listen(port, () => {
    console.log("Server is listening on port", port);
})