const fs = require("fs");

// file system para promesas se aloja en fs.promises
const FSPromesas = fs.promises;

function leerDatos() {
  fs.promises
    .readFile("data.json", "utf-8")
    // * Respuesta positiva / promesa fue resulta
    .then((data) => console.log("[Repuesta positiva]", data))
    // ! Respuesta negativa / promesa fue rechaza
    .catch((err) => console.log("[ERROR]", err))
    .finally(() => console.log("archivo leido"));
}

async function escribirDatosawait(data) {
  try {
    await fs.promises.writeFile("coder.json", data);
    console.log("Archivo escrito");
  } catch (e) {
    console.log("error!");
  }
}

function escribirArchivo(valor, nombre) {
  // sobreescribir contenido
  fs.promises
    .writeFile(nombre + ".json", valor)
    .then((info) => console.log("Archivo escrito"))
    //
    .catch((error) => console.log("Archivo no escrito"))

    .finally(() => console.log("terminado"));
}

function agregarArchivo(valor, nombre) {
  fs.promises
    .appendFile(nombre + ".json", valor)
    .then((info) => console.log("Archivo escrito"))
    //
    .catch((error) => console.log("Archivo no escrito"))

    .finally(() => console.log("terminado"));
}

function renombrarArchivo(nuevoNombre, archivo) {
  fs.promises
    .rename(archivo, nuevoNombre)
    .then((info) => console.log("Archivo escrito"))
    //
    .catch((error) => console.log("Archivo no escrito"))

    .finally(() => console.log("terminado"));
}

async function leerDatosawait() {
  try {
    // * .then()
    const data = await fs.promises.readFile("dat.json", "utf-8");
    console.log("[Repuesta positiva]", data);
    console.log("hola");
  } catch (error) {
    // * .catch()
    console.log("[ERROR]", error);
  }
}

escribirDatosawait("hola mundo!!!!!!!!");
