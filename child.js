let contador = 0;
process.on("message", (msg) => {
  console.log(`Msj padre: `, msg);
  process.send({ contador: ++contador });
  if (msg == "exit") process.exit();
});
