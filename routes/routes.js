const path = require("path");
const db = require("../models");

module.exports = function(app) {
    //* Landing/index/root route
    app.get("/", (req, res) => {
        res.render("pages/index");
    });
    app.get("/about", (req, res) => {
        res.render("pages/about")
    });
    app.get("/devlog", (req, res) => {
        res.render("pages/devlog")
    });
    app.get("/style", (req, res) => {
        res.render("pages/style")
    });
    app.get("/features", (req, res) => {
        res.render("pages/features")
    });
    app.get("/contributions", (req, res) => {
        res.render("pages/contributions")
    });
    app.get("/getinvolved", (req, res) => {
        res.render("pages/getinvolved")
    });
    app.get("/procontributions", (req, res) => {
        res.render("pages/procontributions")
    });
    app.get("/login", (req, res) => {
        res.render("pages/login")
    });
};