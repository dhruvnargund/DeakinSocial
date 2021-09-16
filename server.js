/* Dependencies */
require('dotenv').config();
/* If you run into errors regarding the database or the above, import dotenv via npm i dotenv
Then create a .env file on your local version (.env files don't get pushed to git) and inside that file add:
DB_URL=mongodb://localhost/deakinsocial
I will clean up these comments before submission, of course.
*/
const express = require("express");
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL)
    .then(() => console.log('MongoDB is connected.'))
    .catch(err => console.error('MongoDB connection error', err));

/* Use your env-defined port or default to 3000 */
let port = process.env.PORT || 3000;

/* Middleware JSON handling function for POST/PUT requests */
app.use(express.json());

/* Route Handling */
/* All routes should exist in the routes folder, with this section referencing them.
I've put together some temporary routes based on what we're expecting, 
subject to change based on how everyone lays things out, but without proper handling at this time. */
const users = require('./routes/users');
const timeline = require('./routes/timeline');
const profile = require('./routes/profile');

app.use('/', users);
app.use('/timeline', timeline);
app.use('/profile', profile);

app.listen(port, () => {
    console.log("Server is listening on port", port);
})