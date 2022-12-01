const { fork } = require("child_process");
// * processChild
const child = fork("./numerosAlAzar.js");

child.on("message", (msg) => console.log(`msg hijo:`, msg));
setInterval(() => child.send({ mensaje: "holamundo" }), 500);
console.log("hola papa!");
setTimeout(() => child.kill(), 2000);
