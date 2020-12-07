//* Require dependencies
const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const ejs = require("ejs");

//*Define environment
const PORT = process.env.PORT || 8080;

//* Require database interaction models
const db = require("./models");

//* Create the app express instance and configure middleware for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//*Sessions enables tracking of user's login status
app.use(
  //* Session secret is a randomly generated string to improve security.
  //? Should be replaced at some point with an autoincrementing or randomized variable. Perhaps tied to an autoincrement in the SQL db?
  //? Maybe write script that randomizes the secret values at certain time intervals to improve security by shortening the window within which any given variable can be guessed
  session({ secret: "L9RQML1kGE", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

//* Initialize rendering engine ejs
app.engine("ejs", ejs({ defaultLayout: "main" }));
app.set("view engine", "ejs");

//* Require routes
require("./routes")(app);

//* Sync database and log listener message
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser. 🌎 <== ",
      PORT,
      PORT
    );
  });
});
