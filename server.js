let express = require("express");
let app = express();
let mongo = require('mongodb');

let http = require('http').createServer(app);

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Server is functioning')
})

app.listen(port, () => {
    console.log("Server is listening on port", port);
})