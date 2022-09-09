const express = require("express");

const app = express();

// * pug implementado
app.set("views", "./views");
app.set("view engine", "pug");

app.get("/datos", (req, res) => {
  const { min, nivel, max, titulo } = req.query;

  res.render("datos", { min, nivel, max, titulo });
});

// app.get("/hola", (req, res) => {
//   res.render("vista2");
// });

// app.get("/:nombre", (req, res) => {
//   const { nombre } = req.params;

//   res.render("index", {
//     nombre,
//     usuarios: ["Maria", "pedro", "pepe", "jose"],
//     isLogged: true,
//   });
// });

app.listen(8080);
