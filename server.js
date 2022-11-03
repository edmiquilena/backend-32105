import express from "express";
import { faker } from "@faker-js/faker";
const app = express();
// ?cant=
const { name, internet } = faker;
const genUser = () => {
  return {
    nombre: name.firstName(),
    apellido: name.lastName(),
    email: internet.email(),
  };
};

app.get("/test", (req, res) => {
  const { cant } = req.query;
  const lista = [];

  for (let i = 0; i < cant; i++) {
    lista.push({ id: i + 1, ...genUser() });
  }
  res.send(lista);
});

app.listen(8081, () => console.log("conectado"));
