/* Dependencies */
const express = require('express');
const app = express();
let initDB = require('./initdb');

/* Use env-defined port or default to 3000 */
let port = process.env.PORT || 3000;

/* Middleware JSON handling function for POST/PUT requests */
app.use(express.json());

/* Route Handling */
const users = require('./routes/users');
const timeline = require('./routes/timeline');
const profile = require('./routes/profile');

app.use('/', users);
app.use('/timeline', timeline);
app.use('/profile', profile);

app.listen(port, () => {
    console.log("Server is listening on port", port);
})