import knex from "knex";
import connection from "./mysql/db.js";
import sqliteConfig from "./sqliteConfig.js";
const Knex = knex(sqliteConfig);
// * id, nombre, apellido, correo, rango
Knex.schema
  .createTable("usuarios", (tabla) => {
    // ? id int auto_increment primary key
    tabla.increments("id");
    tabla.string("nombre");
    tabla.string("apellido");
    tabla.string("correo");
    tabla.integer("rango");
  })
  .then(() => console.log("tabla creada!"))
  .catch((e) => {
    console.log("error!", e);
    throw e;
  })
  .finally(() => {
    Knex.destroy();
  });
