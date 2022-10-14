import knex from "knex";
import MySQLConn from "./db.js";

const Knex = knex(MySQLConn);
//  ? has table para verificar que existe o no sin borrar datos
// Knex.schema.hasTable("menu");
// ? droptable
Knex.schema.dropTableIfExists("menu").then(() => {
  console.log("borrado!");
});
Knex.schema
  .createTable("menu", (table) => {
    table.increments("id");
    table.string("nombre");
    table.integer("precio");
    table.integer("stock");
    table.string("description");
  })
  .then(() => {
    console.log("creada!");
  })
  .catch((e) => console.log(e))
  .finally(() => Knex.destroy());
