/ * Restaurante menu
const menu = {
  hamburgesa: 2,
  milanesa: 3,
  tiramisu: 2,
  pasta: 4,
};

const productos = Object.keys(menu);

// * Arrow function
const crearPedido = (producto) => {
  return new Promise((resolve, reject) => {
    if (menu[producto] > 0) {
      // ? Hay stock!
      menu[producto] -= 1;
      //      data
      resolve(`${producto} servido`);
    } else {
      // ! No hay stock
      //      DATA/ERROR
      reject(`${producto} agotado!`);
    }
  });
};
const atenderCliente = (num = 1) => {
  // * Piensa, escoge lo que quiere
  const pedido = productos[Math.floor(Math.random() * productos.length)];

  crearPedido(pedido)
    // * Respuesta positiva
    .then((data) => console.log(`Mostrador ${num} - [THEN] `, data))
    // ! Respuesta negativa
    .catch((error) => console.error(`Mostrador ${num} - [CATCH]`, error))
    // * RESP NEGATIVA, RESP POSITIVA
    .finally(() => {
      console.log(`Mostrador ${num} - [FINALLY] Orden finalizada `, new Date());
      console.log("menu restante:");
      console.table(menu);
    });
};
function habilitarMostrador(num) {
  // * intervalo 2s

  const atencion = setInterval(atenderCliente, 2000);

  setTimeout(() => {
    clearInterval(atencion);
  }, 5000);
}

function start() {
  setInterval(async () => {
    const pedir = productos[Math.floor(Math.random() * productos.length)];
    try {
      const data = await crearPedido(pedir);
      console.log(`[EQUIVALENTE THEN] `, data);
    } catch (error) {
      console.log(`[EQUIVALENTE CATCH]`, error);
    }
    console.log("[EQUIVALENTE FINALLY] Orden finalizada");
    console.log("menu restante:");
    console.table(menu);
  }, 2000);
}
start();
