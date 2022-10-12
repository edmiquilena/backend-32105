import knex from "knex";
import sqliteConfig from "./sqliteConfig.js";
const Knex = knex(sqliteConfig);

console.log(Knex);
