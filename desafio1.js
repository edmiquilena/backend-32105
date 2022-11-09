import express from "express";
import cookieParser from "cookie-parser";
const app = express();
// * POST -> obj cookie
// * GET -> ver cookies
// * DELETE -> eliminar ()

app.use(cookieParser());
app.use(express.json());

app.get("/cookies", (req, res) => {
  res.send({ result: true, ...req.cookies });
});

// * POST -> obj cookie

app.post("/cookies", (req, res) => {
  // * s
  const { nombre, valor, tiempo } = req.body;
  if (!nombre || !valor) return res.send({ error: true });
  res.cookie(nombre, valor, {
    maxAge: !tiempo ? undefined : 1000 * parseInt(tiempo),
  });
  res.send({
    error: false,
    msg: `cookie ${nombre} con valor ${valor} creada.`,
  });
});

// * DELETE -> eliminar ()
app.delete("/cookies/:nombre", (req, res) => {
  const { nombre } = req.params;
  if (!nombre) return res.send({ error: true });

  res
    .clearCookie(nombre)
    .send({ error: false, msg: `cookie ${nombre} eliminada` });
});

app.listen(8081, () => {
  console.log("conectado!");
});
