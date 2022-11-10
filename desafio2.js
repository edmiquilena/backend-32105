import express from "express";
import session from "express-session";
const app = express();
app.use(
  session({
    secret: "9w7qhwe7h37821h7h2e3e23",
  })
);

// * root -> asignar nombre persona, y dar bienvenida/contador
// user -> query
// ?query=

// * localhost:8081/?user=eduardo
// * localhost:8081/eduardo
app.get("/", (req, res) => {
  // req.session.contador
  // req.session.usuario
  if (req.query.user) req.session.usuario = req.query.user;
  if (req.session.contador) {
    req.session.contador++;
    res.send(
      `Hola ${req.session.usuario}! Has accedido ${req.session.contador} veces.`
    );
  } else {
    req.session.contador = 1;
    req.session.usuario = req.query.user;
    res.send(`Bienvenido ${req.session.usuario}!`);
  }
});

app.listen(8081, () => console.log("conectados"));
