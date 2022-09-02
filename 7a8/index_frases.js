const express = require("express");
const palabrasRouter = require("./palabras.js");
const app = express();

app.use(express.json());

let palabras = ["Frase", "inicial"];
// * Servir las rutas de /palabras
app.use("/api", palabrasRouter);
app.get("/api/frase", (req, res) => {
  res.send({ frase: palabras.join(" ") });
});

app.listen(8080, () => {
  console.log("iniciado");
});
