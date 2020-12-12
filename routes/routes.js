const path = require("path");
const db = require("../models");

module.exports = function(app) {
    //* Landing/index/root route
    app.get("/", (req, res) => {
        res.render("pages/index");
    });
};