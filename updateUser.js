import knex from "knex";
import connection from "./db.js";
const Knex = knex(connection);
// ? UPDATE FROM usuarios SET nombre = 'alejandro' WHERE id = 2
Knex.from("usuarios")
  .where("id", 2)
  .update({ nombre: "alejandro", apellido: "huertas" })
  .then(() => console.log("listo"))
  .catch((e) => console.error(e))
  .finally(() => Knex.destroy());
