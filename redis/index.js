import express from "express";
import session from "express-session";
// import redis from "redis";
import Redis from "ioredis";
import connectRedis from "connect-redis";
const app = express();

// * crear cliente de redis
const client = new Redis({
  host: "redislabs.com",
  port: 10472,
  username: "default",
  password: "Z7QQ",
});
// * PONG
// * Crear el envoltorio redis
const SessionRedis = connectRedis(session);

app.use(
  session({
    secret: "32m32e90me2393",
    store: new SessionRedis({
      //host
      //port
      ttl: 60,
      client: client,
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
