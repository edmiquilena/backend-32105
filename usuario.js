import mongoose from "mongoose";
// * Schema -> estructura de la coleccion/contenido
// ? nombre, apellido, edad, esEstudiante, dni

const usuarioSchema = new mongoose.Schema({
  // * nombre: String
  nombre: { type: String, required: true },
  apellido: { type: String, required: false },
  dni: { type: String, required: true, unique: true },
});

// * crear modelo -> interpretacion de la coleccion

const Usuario = mongoose.model("usuarios", usuarioSchema);
//   try {
//     await Usuario.createCollection();
//     console.log("coleccion creada!");
//   } catch (e) {
//     console.log(e);
//   }
export default Usuario;
