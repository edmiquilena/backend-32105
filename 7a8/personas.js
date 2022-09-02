// * /mascotas, y /personas
// * Get: lista
//*, post: agregar
// * nombre, apellido, edad (persona)
// * nombre, raza, edad (mascotas)

const express = require("express");
const multer = require("multer");
const { Router } = express;

const router = Router();
const Personas = [];

// * multer
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.fieldname);
  },
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
});

// * ejercucion de multer
const upload = multer({ storage });

router.post("/subir", upload.single("myFile"), (req, res) => {
  const { file } = req;
  res.send(file);
});

router.post("/album", upload.array("myFile", 12), (req, res) => {
  const { file } = req;
  res.send(file);
});

router.get("/", (req, res) => {
  res.send({ Personas });
});

router.post("/", (req, res) => {
  console.log(req.body);
  const { nombre, apellido, edad } = req.body;
  Personas.push({ nombre, apellido, edad });
  res.send({ agregado: { nombre, apellido, edad } });
});

module.exports = router;
