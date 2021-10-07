# DeakinSocial
A Deakin university specific social media web app for networking and connecting with other people.

## Temporary Readme Update 
I'm adding this to make sure we are all on the same page heading into full-time development.

We'll be using the following as our file structure:
--controllers/
--public/
--routes/
--services/
--initdb.js
--server.js

### controllers/
Will contain our logic controllers, called upon by our route handling.

### public/
Will contain html and other assets.

### routes/
Will contain route request handling.

### services/
Will contain our db CRUD functions, called upon by our controllers.

### server.js
Server launch file. Initializes the db, sets the application to listen, and defines our initial routes.

### initdb.js
Contains our db connection logic and exports as a client for use in the services.

added db schema.
