import knex from "knex";
import connection from "../db.js";
const Knex = knex(connection);

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
