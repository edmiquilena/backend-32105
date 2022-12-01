const child_process = require("child_process");
// .sh
// console.log("hola 1");

// child_process.exec("ls", (error, stdout, stderr) => {
//   console.log(stdout);
// });
// console.log("hola");

const child = child_process.spawn("find", ["."]);

child.stdout.on("data", (data) => console.log(`data: ${data}`));

child.stderr.on("data", (data) => console.error(data));
child.on("close", (code) => console.log(`salida con codigo ${code}`));
