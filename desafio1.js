import express from "express";
const app = express();
const PORT = process.argv[2] || 8080;

app.get("/", (req, res) => {
  res.send(`
    Servidor en puerto ${PORT} <br> PID ${
    process.pid
  } <br> ${new Date().toLocaleString()}`);
});

app.listen(PORT, () => console.log("Iniciado en " + PORT));
