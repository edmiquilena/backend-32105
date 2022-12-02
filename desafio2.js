import cluster from "cluster";
import { cpus } from "os";
import express from "express";
const cpu = cpus().length;
const app = express();
const PORT = 8080;
if (cluster.isPrimary) {
  // * primary
  console.log(`PRIMARY PID ${process.pid}`);
  // * creacion de los workers
  for (let i = 0; i < 3; i++) {
    cluster.fork();
  }
  // socket ->
  cluster.on("exit", (worker) => {
    console.log(`Worker with PID ${worker.process.pid} DOWN`);
    cluster.fork();
  });
} else {
  // * worker
  app.get("/", (req, res) => {
    res.send(`
      Servidor en puerto ${PORT} <br> PID ${
      process.pid
    } <br> ${new Date().toLocaleString()}`);
  });

  app.listen(PORT, () =>
    console.log(`Iniciado en ${PORT} Worker PID ${process.pid}`)
  );
}
