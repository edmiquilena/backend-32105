const { application } = require("express");

console.log("hola!");
// process.exit(0);

process.on("beforeExit", () => {
  console.log("A punto de salir!");
});
process.on("exit", (code) => {
  setTimeout(() => {
    console.log("hola timer");
  }, 0);
  console.log(`salida con codigo ${code}`);
});

process.on("uncaughtException", () => {
  console.log(`error atrapado!`);
});

process.stdout.write("hola console log prehistorico! \n");
console.log(process.execPath);
console.log(`
directorio: ${process.cwd()}
OS: ${process.platform}
memoria: ${JSON.stringify(process.memoryUsage())}
${process.argv}
`);
console.log(process.argv);
//process.exit(3);
process.memoryUsage().rss



// random?query=??????
app.get('/random', (req, res) => {
let total = 0;
for(let i = 0; i < Can; i++) {

total += rand(1, 1000);
}

})

app.get('/', (req, res) => { res.send('hola mundo!')})