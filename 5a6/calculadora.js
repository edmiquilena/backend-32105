const moment = require("moment");

// fecha
const hoy = moment();
// fecha inicial
const nacimiento = moment("12/03/1990", "DD/MM/YYYY");

const difA = hoy.diff(nacimiento, "years");

const difD = hoy.diff(nacimiento, "days");

console.log(`Hoy es ${hoy.format("DD/MM/YYYY")}`);

console.log(`Naci el ${nacimiento.format("DD/MM/YYYY")}`);
console.log(`Desde mi nacimiento han pasado ${difA} años`);
console.log(`Desde mi nacimiento han pasado ${difD} dias`);
