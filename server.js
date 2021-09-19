/* Dependencies */
const express = require('express');
const app = express();
let initDB = require('./initdb');
let path = require("path");
/* Use env-defined port or default to 3000 */
let port = process.env.PORT || 3000;

/* Middleware JSON handling function for POST/PUT requests */
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

/* Route Handling */
const users = require('./routes/users');
const timeline = require('./routes/timeline');
const profile = require('./routes/profile');
const post = require('./routes/post');

app.use('/', users);
app.use('/timeline', timeline);
app.use('/profile', profile);
app.use('/post', post);

// YK Sprint1: routes [START]
let signIn = require('./routes/signIn');
let signUp = require('./routes/signUp');
let forgotPass = require('./routes/forgotPass');
let resetPass = require('./routes/resetPass');

app.use('/signIn', signIn);
app.use('/signUp', signUp);
app.use('/forgotPass', forgotPass);
app.use('/resetPass', resetPass);
// YK Sprint1: routes [END]

app.listen(port, () => {
    console.log("Server is listening on port", port);
})