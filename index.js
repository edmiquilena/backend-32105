import mongoose from "mongoose";
import Usuario from "./usuario.js";
import Estudiante from "./estudiantes.js";
(async () => {
  // * Conectarnos a la base de datos
  try {
    await mongoose.connect(
      "mongodb+srv://edcoder:coder123@edtestnet.snbg1.mongodb.net/ecommerce?retryWrites=true&w=majority",
      {
        serverSelectionTimeoutMS: 4000,
      }
    );
    console.log("conectado a la base!");
  } catch (e) {
    console.error(`error en conexion`, e);
  }

  // * CREATE/ Insertar

  // ? 1: clase
  const usuario = new Usuario({
    nombre: "Federico",
    apellido: "Perez",
    dni: "10000000",
  });
  await usuario.save();

  // ? 2: create
  // Usuario.insertMany([{},{}])
  // for(const estudiante of estudiantes) {
  //     await Usuario.create(estudiante);
  // }
  // * Read / find

  //   const lista = await Usuario.find({});

  //   console.log(lista);

  // * Update / Edicion de documentos
  //   const updateUser = await Estudiante.updateOne(
  //     // * parametro 1 = filtros de busqueda
  //     { dni: "27651878" },

  //     // * cambios en el update
  //     { $set: { edad: 29, nota: 10 } }
  //   );
  //   console.log(updateUser);

  // * DELETE - Eliminar documentos
  //                                        * filtro de busqueda
  //   const deleteUser = await Estudiante.deleteOne({ dni: "27651878" });
  //   console.log(deleteUser);

  // * READ con opciones
  // ?                                filtros, proyeccion
  const lista = await Estudiante.find(
    {},
    // * proyeccion
    { nombre: 1, apellido: 1, dni: 1, _id: 0 }
  )
    // * orden
    .sort({ dni: -1 })
    // * offset/skip o salto
    .skip(2)
    // * limite
    .limit(4);

  console.log(lista);
})();
