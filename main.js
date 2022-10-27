import admin from "firebase-admin";
import fs from "fs";
import FirebaseDetails from "./config.js";
(async () => {
  admin.initializeApp({
    credential: admin.credential.cert(FirebaseDetails.firebase),
    databaseURL: "https://my-coder-project-a9bda.firebaseio.com",
  });

  console.log("Conectados!");

  const db = admin.firestore();

  const Estudiantes = db.collection("estudiantes");

  // * CRUD

  // * CREATE

  await Estudiantes.add({ nombre: "maria" });

  // * id manual
  await Estudiantes.doc(`923892387`).create({ nombre: "jose" });

  // * READ
  // .find({})
  // find all
  const listar = await Estudiantes.get();
  // listar.docs.find(doc => doc.data().edad > 20 )

  listar.forEach((doc) => console.log({ id: doc.id, ...doc.data() }));

  // find filtro

  const usuario = await Estudiantes.doc("7QrYvbPuZtafY5fRp4rb").get();
  console.log({ id: usuario.id, ...usuario.data() });

  // * UPDATE

  await Estudiantes.doc("7QrYvbPuZtafY5fRp4rb").set({ nombre: "Juan" });

  // * DELETE
  try {
    await Estudiantes.doc("7QrYvbPuZtafY5fRp4rb").delete();
  } catch (e) {
    console.log(e);
  }
})();
