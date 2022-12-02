import cluster from "cluster";
import { cpus } from "os";
import express from "express";

const app = express();
const cpu = cpus();

if (cluster.isPrimary) {
  // * primario
  console.log(`Primary: ${process.pid}`);
  for (let i = 0; i < cpu.length; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker with id ${worker.process.pid} killed`);
  });
} else {
  // * insert worker code here

  console.log(`Worker with id ${process.pid}`);
}
