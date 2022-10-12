import knex from "knex";
// import connection from "./db.js";
import sqliteConfig from "./sqliteConfig.js";
const Knex = knex(sqliteConfig);
// * INSERT INTO usuarios (NOMBRE, APELLIDO....) VALUES ('sebastian','ortega'....)
// * INSERT INTO usuarios (NOMBRE, APELLIDO....) VALUES ('',''....) () ()
// * id, nombre, apellido, correo, rango
const usuario = [
  {
    nombre: "Sebastian 2",
    apellido: "ortega",
    correo: "sebas@hola.com",
    rango: 1,
  },
  {
    nombre: "Sebastian 3",
    apellido: "ortega",
    correo: "sebas@hola.com",
    rango: 1,
  },
  {
    nombre: "Sebastian 4",
    apellido: "ortega",
    correo: "sebas@hola.com",
    rango: 1,
  },
];

Knex("usuarios")
  .insert(usuario)
  .then(() => console.log(usuario))
  .catch((e) => console.log(e))
  .finally(() => Knex.destroy());
