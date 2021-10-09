/* Dependencies */
const express = require('express');
const app = express();
let initDB = require('./initdb');
let path = require("path");
/* Use env-defined port or default to 3000 */
let port = process.env.PORT || 3000;

/* Middleware JSON handling function for POST/PUT requests */
app.use(express.json());

/* Deliver static public facing */
app.use(express.static(path.join(__dirname, './public')));

/* Add pug functionality */
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

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
    console.log("Server is listening on port", port);
})
