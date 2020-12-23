const path = require("path");
const db = require("../models");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { use } = require("passport");

module.exports = function (app) {
  //* Stores usernames and passwords
  //! Development use only. Remove after Mongo is integrated
  const users = [];

  const Users = require("../models");

  app.post("/register", async (req, res) => {
    db.Users.create(req.body)
      .then((newUser) => {
        res.json(newUser);
      })
      .catch((err) => {
        res.status(400).json(err);
      });

    //   const hashedPassword = await bcrypt.hash(req.body.password, 10)
    //   users.push({
    //     id: Date.now().toString(),
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: hashedPassword
    //   })
    //   res.redirect("/login")
    // } catch {
    //   res.redirect("/register")
    // }
    // console.log(users);
  });

  app.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/dashboard",
      failureRedirect: "/login",
      failureFlash: true,
    })
  );
};
