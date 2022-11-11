import express from "express";
import session from "express-session";
const app = express();

app.use(
  session({
    secret: "32890h9h9e238he3",
  })
);
const auth = (req, res, next) => {
  if (req.session.usuario) {
    next();
  } else {
    res.status(401).send({ error: true });
  }
};
const adminAuth = (req, res, next) => {
  if (req.session.isAdmin) {
    next();
  } else {
    res.status(401).send({ error: true });
  }
};
app.get("/", (req, res) => {
  if (req.session.user) {
    // mensaje de bienvenida con usuario
    // muestra vista de agregar productos
  } else {
    // muestra form login
  }

  res.send({
    sessionID: req.sessionID,
    sessionStore: req.sessionStore,
    sesion: req.session,
  });
});
app.get("/admin", auth, adminAuth, (req, res) => {
  res.send("hola admin!");
});
app.get("/perfil", auth, (req, res) => {
  res.send("hola admin!");
});

app.get("/login", (req, res) => {
  // * contenido
  const usuario = "eduardo";
  const isAdmin = true;
  req.session.user = usuario;
  req.session.isAdmin = isAdmin;

  res.send("inicio");
});
app.get("/logout", auth, (req, res) => {
  // *destruyendo
  req.session.destroy();
  res.send("fin!");
});

app.get("/contador", (req, res) => {
  if (req.session.contador) {
    req.session.contador++;
    // * reemplazar
    req.session.contador = 10;
    res.send(req.session);
  } else {
    // * creando
    req.session.contador = 1;
    res.send("hola mundo!");
  }
});
app.listen(8081, () => {
  console.log("conectado!");
});
