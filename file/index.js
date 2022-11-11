import express from "express";
import session from "express-session";
import FileStore from "session-file-store";
const app = express();

const fileStoreSession = FileStore(session);

app.use(
  session({
    secret: "32m32e90me2393",
    store: new fileStoreSession({ path: "./sessions", ttl: 300, retries: 0 }),
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
