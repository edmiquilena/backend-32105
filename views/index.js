// * FRONTEND
//*             lista de mensajes
function render(data) {
  const html = data
    .map(
      (msg) => `<li class="clearfix">
<div class="message-data">
  <span class="message-data-time">${msg.autor}</span>
</div>
<div class="message my-message">${msg.msj}</div>
</li>`
    )
    .join(" ");

  document.getElementById("mensajes").innerHTML = html;
}
const socket = io.connect();

function enviarMensaje(event) {
  const nombre = document.getElementById("nombre").value;
  const msj = document.getElementById("chat_mensaje").value;
  document.getElementById("chat_mensaje").value = "";
  socket.emit("new_msg", { autor: nombre, msj: msj });
  return false;
}

socket.on("mensajes", (data) => {
  console.log(data);
  render(data);
});
