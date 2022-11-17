// express
// express-session
// express-handlebars
import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy as localStrategy } from "passport-local";
// * Memoria / DB

const usuarios = [];
//registro

passport.use(
  "register",
  new localStrategy(
    {
      passReqToCallback: true,
    },
    (req, username, password, done) => {
      const { email } = req.body;
      const user = usuarios.find((u) => u.username == username);

      if (user) return done("Usuario registrado");

      usuarios.push({ username, password, email });
      const userObj = { username, password, email };
      return done(null, userObj);
    }
  )
);
//login

passport.use(
  "login",
  new localStrategy(
    { passReqToCallback: true },
    (req, username, password, done) => {
      const user = usuarios.find(
        (user) => user.username == username && user.password == password
      );
      if (!user) return done("usuario no existe");
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  const user = usuarios.find((user) => user.username == username);

  done(null, user);
});

const app = express();
app.use(
  session({
    secret: "holaosysecretop",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const authMW = (req, res, next) => {
  req.isAuthenticated() ? next() : res.send({ error: true, msg: "sin sesion" });
};

// * registro
// get, post
app.get("/register", (req, res) => {
  {
  }
});

app.post("/register", passport.authenticate("register"), (req, res) => {
  {
    res.send(req.user);
  }
});

// * login
// get, post
app.get("/login", (req, res) => {});

app.post("/login", passport.authenticate("login"), (req, res) => {
  res.send(req.user);
});
// * logout
// get
app.get("/logout", (req, res) => {
  req.logout();
  res.send("sesion passport cerrada!");
});
// * datos
// get

app.get("/datos", authMW, (req, res) => {
  res.send({ error: false, data: req.user });
});

app.listen(8080, () => console.log("conectados!"));
