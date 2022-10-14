import knex from "knex";
import connection from "./db.js";
const Knex = knex(connection);

Knex.schema.createTableIfNotExists;

Knex.schema
  .createTable("articulos", (tabla) => {
    // * nombre varchar 15 not null, codigo 10, precio float, sotck entero, id
    tabla.increments("id");
    tabla.string("nombre", 15).notNullable();
    tabla.string("codigo", 10).notNullable();
    tabla.float("precio");
    tabla.integer("stock");
  })
  .then(() => console.log("creado!"))
  .catch((e) => console.log(e));
