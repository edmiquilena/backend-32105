import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import { DBConnect, Users } from "./controller.js";
import bcrypt from "bcrypt";
const app = express();
app.use(express.json());
// signup
passport.use(
  "signup",
  new Strategy({ passReqToCallback: true }, (req, username, password, done) => {
    console.log(username, password);

    const { email } = req.body;
    Users.findOne({ username }, (err, user) => {
      console.log(user);
      console.log(err);
      if (user) return done(null, false);

      Users.create(
        { username, password: hasPassword(password), email },
        (err, user) => {
          if (err) return done(err);
          //null    // obj // truthy
          return done(null, user);
        }
      );
    });
  })
);

passport.use(
  "login",
  new Strategy({}, (username, password, done) => {
    Users.findOne({ username }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      if (!validatePass(password, user.password)) return done(null, false);
      return done(null, user);
    });
  })
);

const hasPassword = (pass) => {
  // ocultar
  return bcrypt.hashSync(pass, bcrypt.genSaltSync(10), null);
};
const validatePass = (pass, hashedPass) => {
  // validar
  return bcrypt.compareSync(pass, hashedPass);
};
passport.serializeUser((userObj, done) => {
  done(null, userObj._id);
});

passport.deserializeUser((id, done) => {
  Users.findById(id, done);
});
app.use(
  session({
    secret: "holamundo",
    cookie: {
      maxAge: 60000,
    },
    saveUninitialized: false,
    resave: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// login -> signin

// /login -> password

const authMw = (req, res, next) => {
  req.isAuthenticated() ? next() : res.send({ error: false });
};

app.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/error" }),
  (req, res) => {
    res.send({ error: false });
    // res.redirect('/home')
  }
);

app.post(
  "/signup",
  passport.authenticate("signup", { failureRedirect: "/error" }),
  (req, res) => {
    res.send({ error: false });
  }
);

app.get("/datos", authMw, (req, res) => {
  res.send({ hola: "mundo", data: req.user });
});

DBConnect(() => {
  app.listen(8080, () => console.log("conectados!"));
});
