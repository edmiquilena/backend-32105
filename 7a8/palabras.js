const express = require("express");

const { Router } = express;
let palabras = ["Frase", "inicial"];
const router = Router();
router.get("/palabras/:pos", (req, res) => {
  res.send({ actualiza: "hola get" });
});

router.post("/palabras", (req, res) => {
  res.send({ actualiza: "hola post" });
});

router.put("/palabras/:pos", (req, res) => {
  res.send({ actualiza: "hola put" });
});

module.exports = router;
