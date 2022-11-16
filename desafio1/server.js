// express
// express-session
// express-handlebars
import express from "express";
import session from "express-session";
// * Memoria / DB

const usuarios = [];

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const authMW = (req, res, next) => {
  req.session.username ? next() : res.send({ error: true, msg: "sin sesion" });
};

// * registro
// get, post
app.get("/register", (req, res) => {
  {
  }
});

app.post("/register", (req, res) => {
  {
    const { nombre, password, email } = req.body;
    const user = usuarios.find((u) => u.nombre == nombre);

    if (user) return res.send({ error: true, msg: "usuario existe" });

    usuarios.push({ nombre, password, email });
    res.send({ error: false, msg: "creado!" });
    //res.redirect("/login");
  }
});

// * login
// get, post
app.get("/login", (req, res) => {});

app.post("/login", (req, res) => {
  const { nombre, password } = req.body;
  const user = usuarios.find(
    (user) => user.nombre == nombre && user.password == password
  );
  if (!user) return res.send({ error: true, msg: "usuario no existe" });
  req.session.username = nombre;
  res.send({ error: false, user: req.session.username });
  // res.redirect("/datos");
});
// * logout
// get
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.send({ error: false, msg: "chao!" });
  });
});
// * datos
// get

app.get("/datos", authMW, (req, res) => {
  const user = usuarios.find((u) => u.nombre == req.session.username);
  res.send({ error: false, data: user });
});

app.listen(8080, () => console.log("conectados!"));
