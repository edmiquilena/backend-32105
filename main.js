import express from "express";
import { faker } from "@faker-js/faker";
import ContenedorMemoria from "./ContenedorMemoria.js";
const app = express();
app.use(express.json());
// ?cant=
const { name, internet } = faker;
// * db en memoria

const lista = new ContenedorMemoria();

const genUser = () => {
  return {
    nombre: name.firstName(),
    apellido: name.lastName(),
    email: internet.email(),
  };
};

app.get("/api/usuarios/popular", (req, res) => {
  const { cant } = req.query;

  for (let i = 0; i < cant; i++) {
    lista.push({ id: lista.length + 1, ...genUser() });
  }
  res.send(lista);
});

app.get("/api/usuarios/:id", (req, res) => {
  const { id } = req.params;

  const find = lista.find((i) => i.id == id);
  res.send(find);
});

app.post("/api/usuarios", (req, res) => {
  const nuevoUsuario = { id: lista.length + 1, ...genUser() };
  lista.push(nuevoUsuario);
  res.send(nuevoUsuario);
});

app.put("/api/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, email } = req.body;
  const indexUser = lista.findIndex((i) => i.id == id);
  if (indexUser >= 0) {
    lista[indexUser] = { id, nombre, apellido, email };
  }
  res.send({ ok: true });
});

app.delete("/api/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const indexUser = lista.findIndex((i) => i.id == id);
  // -1
  if (indexUser >= 0) {
    lista.splice(indexUser, 1);
  }
  res.send(lista);
});

app.listen(8081, () => console.log("conectado"));
