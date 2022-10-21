import mongoose from "mongoose";
import Usuario from "./usuario.js";
(async () => {
  // * Conectarnos a la base de datos
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/coder", {
      serverSelectionTimeoutMS: 4000,
    });
    console.log("conectado a la base!");
  } catch (e) {
    console.error(`error en conexion`, e);
  }

  const estudiantes = [
    {
      nombre: "Pedro",
      apellido: "Mei",
      edad: 21,
      dni: "31155898",
      curso: "1A",
      nota: 7,
    },
    {
      nombre: "Ana",
      apellido: "Gonzalez",
      edad: 32,
      dni: "27651878",
      curso: "1A",
      nota: 8,
    },
    {
      nombre: "José",
      apellido: "Picos",
      edad: 29,
      dni: "34554398",
      curso: "2A",
      nota: 6,
    },
    {
      nombre: "Lucas",
      apellido: "Blanco",
      edad: 22,
      dni: "30355874",
      curso: "3A",
      nota: 10,
    },
    {
      nombre: "María",
      apellido: "García",
      edad: 36,
      dni: "29575148",
      curso: "1A",
      nota: 9,
    },
    {
      nombre: "Federico",
      apellido: "Perez",
      edad: 41,
      dni: "320118321",
      curso: "2A",
      nota: 5,
    },
    {
      nombre: "Tomas",
      apellido: "Sierra",
      edad: 19,
      dni: "38654790",
      curso: "2B",
      nota: 4,
    },
    {
      nombre: "Carlos",
      apellido: "Fernández",
      edad: 33,
      dni: "26935670",
      curso: "3B",
      nota: 2,
    },
    {
      nombre: "Fabio",
      apellido: "Pieres",
      edad: 39,
      dni: "4315388",
      curso: "1B",
      nota: 9,
    },
    {
      nombre: "Daniel",
      apellido: "Gallo",
      edad: 25,
      dni: "37923460",
      curso: "3B",
      nota: 2,
    },
  ];

  try {
    const estudiantesSchema = new mongoose.Schema({
      nombre: { type: String, required: true },
      apellido: { type: String, required: true },
      edad: { type: Number, required: true },
      dni: { type: String, required: true, unique: true },
      curso: { type: String, required: true },
      nota: { type: Number, required: true },
    });

    const Estudiante = mongoose.model("estudiantes", estudiantesSchema);

    await Estudiante.insertMany(estudiantes);
    console.log("usuarios insertados");

    const estudiantesLista = await Estudiante.find({});
    console.log(estudiantesLista);
  } catch (e) {
    console.log(e);
  }
})();
