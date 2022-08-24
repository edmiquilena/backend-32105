// * Funcion genere num al azar 1 al 20
const numeros = {};
function numAleatorio(num) {
  // * 1-20
  return parseInt(Math.random() * num) + 1;
}

for (let i = 0; i < 10000; i++) {
  const alAzar = numAleatorio(20);
  if (!numeros[alAzar]) {
    numeros[alAzar] = 0;
  }
  numeros[alAzar]++;
}
console.log(numeros);
