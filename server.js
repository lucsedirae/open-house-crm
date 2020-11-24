const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");

const PORT = process.env.PORT || 8080;
const db = require("./models")

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));