const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const Users = require("../models/users");

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookes["access_token"];
  }
  return token;
};

//* Authorization strategy to verify auithenticated user to protect endpoints
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: ".hxZQmZ/ZwYvg$6B?7{bu(bA+XDz,Z",
    },
    (payload, done) => {
      Users.findById({ _id: payload.sub }, (err, user) => {
        if (err) return done(err, false);
        if (user) return done(null, user);
        else return done(null, false);
      });
    }
  )
);

//* Authenticate via local strategy
passport.use(
  new LocalStrategy((email, password, done) => {
    Users.findOne({ email }, (err, user) => {
      //* If database has an error:
      if (err) return done(err);
      //* If no user exists
      if (!user) return done(null, false);
      //* Password validation
      user.comparePassword(password, done);
    });
  })
);

// function initialize(passport, getUserByEmail, getUserById) {
//   const authenticateUser = async (email, password, done) => {
//     const user = getUserByEmail(email);
//     if (user == null) {
//       return done(null, false, { message: "No user with that email" });
//     }

//     try {
//       if (await bcrypt.compare(password, user.password)) {
//         return done(null, user);
//       } else {
//         return done(null, false, { message: "Password incorrect" });
//       }
//     } catch (e) {
//       return done(e);
//     }
//   };

//   passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
//   passport.serializeUser((user, done) => done(null, user.id));
//   passport.deserializeUser((id, done) => {
//     return done(null, getUserById(id));
//   });
// }

module.exports = initialize;
