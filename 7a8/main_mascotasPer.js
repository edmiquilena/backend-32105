const express = require("express");
const app = express();
const personasRouter = require("./personas");
const mascotasRouter = require("./mascotas");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/personas", personasRouter);
app.use("/api/mascotas", mascotasRouter);

app.use("/", express.static(__dirname + "/assets"));

app.listen(8080, () => {
  console.log("iniciado");
});
