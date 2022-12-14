import express from "express";
import compression from "compression";

const app = express();
// app.use(compression())
const mensaje = "hola mundo coder".repeat(100000);

// * normal
app.get("/saludo", (req, res) => {
  res.send(mensaje);
});

// * comprimido
app.get("/saludogzip", compression(), (req, res) => {
  res.send(mensaje);
});

app.listen(8081, () => console.log("conectado!"));
