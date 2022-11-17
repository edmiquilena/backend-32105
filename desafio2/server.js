import express from "express";
import session from "express-session";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

//

const { pathname: root } = new URL(".", import.meta.url);

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
