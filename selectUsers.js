import knex from "knex";

import sqliteConfig from "./sqliteConfig.js";
const Knex = knex(sqliteConfig);
// ? SELECT * FROM usuarios WHERE id = 2 AND nombre = x

Knex.from("usuarios")
  .select("*")
  .orderBy("id", "desc")
  // .whereRaw('id = 2 AND nombre = x')
  .then((rows) => {
    console.table(rows);
  })
  .catch((e) => console.error(e))
  .finally(() => Knex.destroy());
