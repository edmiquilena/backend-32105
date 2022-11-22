import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy as TwitterStrategy } from "passport-twitter";

const app = express();

const CONSUMER_KEY = "s3j2j023je32";
const CONSUMER_SKEY = "e32e32e32";
passport.use(
  new TwitterStrategy(
    {
      consumerKey: CONSUMER_KEY,
      consumerSecret: CONSUMER_SKEY,
      callbackURL: "/auth/twitter/callback",
    },
    (accessToken, tokenRefresh, userProfile, done) => {
      return done(null, userProfile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

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

// localhost/auth/twitter -> twitter.com/
app.get("/auth/twitter", passport.authenticate("twitter"));
app.get("/", (req, res) => {
  req.isAuthenticated();
  //req.user
  req.logout();
});
app.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", {
    successRedirect: "/admin",
    failureRedirect: "/error",
  })
);
app.listen(8080, () => console.log("conectados!"));
