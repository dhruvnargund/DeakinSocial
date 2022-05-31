/* Dependencies */
require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
let path = require("path");

/* Use env-defined port or default to 3000 */
let port = process.env.PORT || 3000;

/* Database connection */
const uri = process.env.DB_URL;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Connection to db established."))
  .catch((err) => console.log("Error:", err));

/* Get database collection names for confirmation */
mongoose.connection.on("open", function () {
  mongoose.connection.db.listCollections().toArray(function (err, names) {
    if (err) {
      console.log("Error:", err);
    } else {
      names.forEach((e) => console.log("-", e.name));
    }
  });
});

/* Middleware JSON handling function for POST/PUT requests */
app.use(express.json());

/* Deliver static public facing */
app.use(express.static(path.join(__dirname, "./app/public")));
app.use(express.urlencoded({ extended: true }));

/* Add pug functionality */
app.set("views", path.join(__dirname, "./app/views"));
app.set("view engine", "pug");

/* Route Handling */
const timeline = require("./app/routes/timeline");
const profile = require("./app/routes/profile");
const signIn = require("./app/routes/signIn");
const signUp = require("./app/routes/signUp");
const search = require("./app/routes/search");
const friends = require("./app/routes/friends");
const chatBot = require("./app/routes/chatBot");

app.use("/profile", profile);
app.use("/signIn", signIn);
app.use("/signUp", signUp);
app.use("/search", search);
app.use("/friends", friends);
app.use("/chatBot", chatBot);
app.use("/", timeline);

// chatbot
const dialogflow = require("@google-cloud/dialogflow");
const uuid = require("uuid");
const bodyParser = require("body-parser");
// A unique identifier for the given session
const sessionId = uuid.v4();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// This is to allow the url to pass data
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.post("/send-msg", (req, res) => {
  runSample(res.body.MSG).then((data) => {
    res.send({ Reply: data });
  });
});
/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runSample(msg, projectId = "sit737chatbot") {
  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
    // This is the keyfile location
    keyFilename: "sit737chatbot-71a293af79a9.json",
  });
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: msg,
        // The language used by the client (en-US)
        languageCode: "en-US",
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log("Detected intent");
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  // here is where we get the response
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log("  No intent matched.");
  }
  // We need it to return the message
  return result.fulfillmentText;
}

 runSample();

app.listen(port, () => {
  console.log("Server is listening on port", port);
});
