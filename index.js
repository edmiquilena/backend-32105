const express = require("express");
const { Server: HTTPServer } = require("http");
const { Server: SocketServer } = require("socket.io");
// servidor express
const app = express();
const httpServer = new HTTPServer(app);
const io = new SocketServer(httpServer);
const Mensajes = [
  { autor: "Jose", msj: "hola mundo!" },
  { autor: "maria", msj: "hola coder!" },
  { autor: "pedro", msj: "hola todos!" },
];
app.use(express.static("views"));

// *                !! socket
io.on("connection", (socket) => {
  console.log(`conectado: ${socket.id}`);
  socket.emit("mensajes", Mensajes);

  // * Escuchar los mensajes nuevos
  socket.on("new_msg", (data) => {
    console.log(data);
    Mensajes.push(data);
    // socket.to().emit('evento', 'data')
    io.sockets.emit("mensajes", Mensajes);
  });
});
// * const socket = usuario especifico
// * io.sockets = a todos los usuarios que esten conectados al global
httpServer.listen(8080, () => {
  console.log("conectado!");
});
