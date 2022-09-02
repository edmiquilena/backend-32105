// * /mascotas, y /personas
// * Get: lista
//*, post: agregar
// * nombre, apellido, edad (persona)
// * nombre, raza, edad (mascotas)
const express = require("express");

const { Router } = express;

const router = Router();

const Mascotas = [];

router.get("/", (req, res) => {
  res.send({ Mascotas });
});

router.post("/", (req, res) => {
  const { nombre, raza, edad } = req.body;
  Mascotas.push({ nombre, raza, edad });
  res.send({ agregado: { nombre, raza, edad } });
});

module.exports = router;
