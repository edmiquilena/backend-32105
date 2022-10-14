import MySQLConn from "./db.js";
import express from "express";
import DBContainer from "./contenedor.js";
import { IOERR } from "sqlite3";
const app = express();
const DB = new DBContainer(MySQLConn, "menu");
app.use(express.json());
app.set("json spaces", 2);
app.get("/menu", async (req, res) => {
  const menu = await DB.getAll();
  res.send(menu);
});

app.get("/menu/:id", async (req, res) => {
  const { id } = req.params;
  const menu = await DB.getbyId(id);
  res.send(menu);
});

app.post("/menu", async (req, res) => {
  // * nombre, descripcion, precio, stock
  const { body } = req;
  await DB.InsertValue(body);
  res.send(body);
});

app.put("/menu/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const result = await DB.updateEntry(body, id);
  res.send({ result });
});

app.delete("/menu/:id", async (req, res) => {
  const { id } = req.params;
  const result = await DB.deleteEntry(id);
  res.send({ result });
});

app.listen(8081, () => {
  console.log("escuchando!");
});
