import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import MongoStore from "connect-mongo";
import DAOUsuarios from "./daos/UsuariosDAO.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
const MongoUsers = new DAOUsuarios();
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(
  session({
    secret: "2332ee32e3232ee32",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/sesiones",
      mongoOptions,
    }),
  })
);
app.use(express.static("public"));

//

const { pathname: root } = new URL(".", import.meta.url);

const authMod = (req, res, next) => {
  req.session.rank >= 1
    ? next()
    : res.status(401).send({ rango: req.session.rank, error: "Sin permisos" });
};
const authAdmin = (req, res, next) => {
  req.session.rank >= 2
    ? next()
    : res.status(401).send({ rango: req.session.rank, error: "Sin permisos" });
};

app.get("/admin", authAdmin, (req, res) => {
  res.send("Hola admin!");
});
app.get("/mod", authMod, (req, res) => {
  res.send("Hola mod!");
});
// ROOT
app.get("/", (req, res) => {
  // * si existe sesion mostrar mensaje
  // * login:

  if (req.session.usuario) {
    res.sendFile(root + "public/dashboard.html");
  } else {
    if (req.query.error) {
      res.sendFile(root + "public/error.html");
    } else {
      res.sendFile(root + "public/login.html");
    }
  }
});

// * login
// * leer la base de datos
// * session
app.post("/", async (req, res) => {
  // * usuario
  // * rango [admin, mod]
  try {
    const { username, password } = req.body;
    const usuario = await MongoUsers.listar(username, password);
    console.log(usuario);
    req.session.rank = usuario.rank;
    req.session.usuario = username;
    res.redirect("/");
  } catch (e) {
    res.redirect("/?error=true");
  }
});

// * registro
// * crear usuario
// * session
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  await MongoUsers.guardar({ username, password });
  req.session.usuario = username;
  req.session.rank = 0;
  res.redirect("/");
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
});

app.listen(8081, () => console.log("conectados"));
