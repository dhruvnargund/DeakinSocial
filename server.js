/* Dependencies */
const express = require('express');
const app = express();
const formidable = require('express-formidable');
// formidable is used to handle input fields
app.use(formidable());
// initDB is mongoDB 
let initDB = require('./initdb');
let path = require("path");
// ObjectId will be used to generate unique id for users
let ObjectId = initDB.ObjectId;
// to encrypt the plain text file
const bcrypt = require('bcrypt');
// fs to save the files
const fileSystem = require('fs');
// jsw to save webtokens 
const jwt = require('jsonwebtoken');
const accessToken = 'dhruvAccessToken1702';


// // chat feature. We will remove if we don't implement
// // socket.io will be used for implementing chat feature 
// const socketIO = require('socket.io')(http);
// // each user will have a unique id so id empty
// let socketID = '';
// // array where all connected users will be kept (chat feature)
// let user = [];
// let mainURL = '';
// const getMainURL = (req, res) => {
//     // req.protocol will return http, get(host) will return doomain name like google, localhost
//     mainURL = `${req.protocol}://${req.get('host')}`;
// }
// socketIO.on('connection', (socket) => {
//     console.log(`User ${socket.id} connected`);
//     socketID = socket.id;
// });



/* Use env-defined port(port defined by the server) or default to 3000 */
let port = process.env.PORT || 3000;

/* Middleware JSON handling function for POST/PUT requests */
app.use(express.json());

/* Deliver static public facing */
app.use(express.static(path.join(__dirname, './public')));
// ejs will be used to embeed dynamic parameters in a static html
app.set('view engine', 'ejs');


/* Route Handling */
const users = require('./routes/users');
const timeline = require('./routes/timeline');
const profile = require('./routes/profile');
const post = require('./routes/post');
const signIn = require('./routes/signIn');
const signUp = require('./routes/signUp');
const forgotPass = require('./routes/forgotPass');
const resetPass = require('./routes/resetPass');

app.use('/', users);
app.use('/timeline', timeline);
app.use('/profile', profile);
app.use('/post', post);
app.use('/signIn', signIn);
app.use('/signUp', signUp);
app.use('/forgotPass', forgotPass);
app.use('/resetPass', resetPass);

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
})
