import mongoose from "mongoose";
import Estudiante from "./estudiantes.js";
(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/coder", {
      serverSelectionTimeoutMS: 4000,
    });
    console.log("conectado a la base!");

    console.log(await Estudiante.find({}, {}).sort({ nombre: 1 }));
    await Estudiante.find({}).sort({ edad: 1 }).limit(1);
    await Estudiante.find({ curso: "2A" });
    await Estudiante.find({}).sort({ edad: 1 }).skip(1).limit(1);
    // * nombre, apellido, curso, z-a
    console.log(
      await Estudiante.find(
        {},
        { nombre: 1, apellido: 1, curso: 1, _id: 0 }
      ).sort({
        apellido: -1,
      })
    );
    console.log("\n estudiante que sacó mejor nota");
    await Estudiante.find({ nota: 10 });
    console.log("\n El promedio de notas del total de alumnos");
    const notas = await Estudiante.find({}, { nota: 1, _id: 0 });
    const promedio =
      notas.map((i) => i.nota).reduce((pv, cv) => pv + cv, 0) / notas.length;
    console.log("\n El promedio de notas del curso '1A'");
    const notas1a = await Estudiante.find({ curso: "1A" }, { nota: 1, _id: 0 });
    const promedio1a =
      notas1a.map((i) => i.nota).reduce((pv, cv) => pv + cv, 0) /
      notas1a.length;
    console.log("\n Actualizar el dni del estudiante Lucas Blanco a 20355875");
    // * ----------------------------------------------------------------------------
    await Estudiante.updateOne(
      { nombre: "Lucas", apellido: "Blanco" },
      { $set: { dni: "2112122112" } }
    );
    console.log(
      `\n Agregar un campo 'ingreso' a todos los documentos con el valor false`
    );
    //  await Estudiante.updateMany({}, { $set: { ingreso: false } })

    console.log(
      `\n3) Modificar el valor de 'ingreso' a true para todos los estudiantes que pertenezcan al curso 1A`
    );
    await Estudiante.updateMany({ curso: "1A" }, { $set: { ingreso: true } });
    // nota > 4
    console.log(
      `\n Listar los estudiantes que aprobaron (hayan sacado de 4 en adelante)`
    );
    await Estudiante.find({ nota: { $gt: 4 } });

    console.log(
      `\n Listar los estudiantes que posean el campo 'ingreso' en true sin los campos de _id`
    );
    await Estudiante.find({ ingreso: true }, { _id: 0 });

    console.log(
      `\n Borrar de la colección de estudiantes, los documentos cuyo campo 'ingreso' esté en true`
    );

    await Estudiante.deleteMany({ ingreso: true });
  } catch (e) {
    console.error(`error en conexion`, e);
  }
})();
