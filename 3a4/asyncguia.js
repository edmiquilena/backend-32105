const fs = require("fs");

fs.readFile("usuario.json", (err, file) => {
  setTimeout(() => {
    console.log(JSON.parse(file));
  }, 2000);
});

console.log("Hola usuario!");
fs.readFile("usuario2.json", (err, file) => {
  if (err) return console.log("Vaya! No se ha conseguido este usuario");
});
const resultado = () => {
  console.log("Miren, me ejecuto!");
};
setInterval(resultado, 1000);
