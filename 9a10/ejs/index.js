const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * ejs implementado
app.set("views", "./views");
app.set("view engine", "ejs");
const personas = [];

// * FRONTEND
// * formulario

app.get("/", (req, res) => {
  res.render("formulario/index", { personas });
});

// * Backend
// * POST nombre, apellido, edad

app.post("/personas", (req, res) => {
  const { nombre, apellido, edad } = req.body;

  personas.push({ nombre, apellido, edad });
});

app.get("/datos", (req, res) => {
  const { min, nivel, max, titulo } = req.query;

  res.render("datos", { min, nivel, max, titulo });
});

app.listen(8080);
