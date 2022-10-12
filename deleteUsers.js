import knex from "knex";
import sqliteConfig from "./sqliteConfig.js";
const Knex = knex(sqliteConfig);

Knex.from("usuarios")
  .where("id", 4)
  .del()
  .then(() => console.log("listo"))
  .catch((e) => console.error(e))
  .finally(() => Knex.destroy());
