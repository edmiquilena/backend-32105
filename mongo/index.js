import express from "express";
import session from "express-session";
// import redis from "redis";
import MongoStore from "connect-mongo";
const app = express();

// * crear cliente de redis
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(
  session({
    secret: "32m32e90me2393",
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://url/sesiones",
      mongoOptions: advancedOptions,
    }),
    resave: false,
    saveUninitialized: false,
  })
);
app.get("/", (req, res) => {
  if (req.session.contador) {
    req.session.contador++;
    res.send(`Has accedido ${req.session.contador} veces.`);
  } else {
    req.session.contador = 1;
    res.send(`Bienvenido`);
  }
});

app.listen(8081, () => console.log("conectados"));
