import ContenedorMemoria from "./ContenedorMemoria.js";
const DB = new ContenedorMemoria();

beforeEach(() => {
  DB.borrarAll();
});

// TODO: Debe regresar una lista vacia
it("Should return an empty list", async () => {
  const lista = await DB.listarAll();
  expect(lista).toEqual([]);
});
// TODO: Debe agregar un nuevo valor y revisar si su salida es igual a la entrada
it("Debe agregar un nuevo valor y revisar si su salida es igual a la entrada", async () => {
  const input = { nombre: "eduardo" };
  const output = await DB.guardar(input);
  expect(output).toMatchObject(input);
});

// TODO: Debe agregar un nuevo valor y revisar la lista

// TODO: Debe agregar y vaciar la lista

// TODO: debe filtrar por ID
