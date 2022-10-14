import connection from "./db.js";
import knex from "knex";
const Knex = knex(connection);

const articulos = [
  {
    nombre: "Coca-Cola",
    codigo: "COCA-COLA",
    precio: 2.5,
    stock: 10,
  },
  {
    nombre: "Fanta",
    codigo: "FANTA",
    precio: 2.5,
    stock: 10,
  },
  {
    nombre: "Sprite",
    codigo: "SPRITE",
    precio: 2.5,
    stock: 10,
  },
  {
    nombre: "Pepsi",
    codigo: "PEPSI",
    precio: 2.5,
    stock: 10,
  },
  {
    nombre: "7Up",
    codigo: "7UP",
    precio: 2.5,
    stock: 10,
  },
];

Knex("articulos")
  .insert(articulos)
  .then(() => console.log("creados articulos!"))
  .catch((e) => console.log(e));

Knex.from("articulos")
  .select("*")
  .where()
  .then((rows) => console.table(rows));

Knex.from("articulos")
  .where("id", 3)
  .del()
  .then(() => console.log("articulos eliminados!"))
  .catch((e) => console.log(e));

Knex.from("articulos")
  .where("id", 2)
  .update({ stock: 0 })
  .then(() => console.log("articulo actualizado!"))
  .catch((e) => console.log(e));
