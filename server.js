//* Require dotenv if not in production environment
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//* Require dependencies
const express = require("express");
const ejs = require("ejs");
const path = require("path");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const logger = require("morgan");

//*Define environment
const PORT = process.env.PORT || 8080;

//* Initialize MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/openhouse_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

//* Require database interaction models
const users = require("./models/users");

//* Initialize passport
const initializePassport = require("./config/passport");
initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

//* Create the app express instance and configure middleware for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

//* Initialize rendering engine ejs
app.set("view engine", "ejs");

//* Require routes
require("./routes/html-routes.js")(app);
require("./routes/login-api.js")(app);

//* Sync database and log listener message
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser. 🌎 <== ",
    PORT,
    PORT
  );
});
