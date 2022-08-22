const fs = require("fs");

class baseDeDatos {
  // * solo se invoca cuando se crea instancia

  constructor(archivo) {
    this.archivo = archivo;
  }

  // ? Usuario

  //*  crear usuario
  async createUser(objUser) {
    // paso1
    // * { nombre: "eduardo", correo: "hola@google.com" }
    const data = await fs.promises.readFile(
      `${this.archivo}/usuarios.json`,
      "utf-8"
    );
    const usuarios = JSON.parse(data);
    const id = usuarios.length + 1;
    // * { nombre: "eduardo", correo: "hola@google.com", id: id }
    objUser.id = id;
    // * { nombre: "eduardo", correo: "hola@google.com", id: id, likes }
    objUser.likes = [];
    usuarios.push(objUser);
    const usuariosString = JSON.stringify(usuarios);
    await fs.promises.writeFile(
      `${this.archivo}/usuarios.json`,
      usuariosString
    );

    return usuarios;
  }

  //* obtener todos los usario

  async getAllUsers() {
    try {
      const data = await fs.promises.readFile(
        `${this.archivo}/usuari.json`,
        "utf-8"
      );
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  // * obtener usuarios por ID
  //                parametro
  async getUserById(id) {
    const data = await fs.promises.readFile(
      `${this.archivo}/usuarios.json`,
      "utf-8"
    );
    const usuarios = JSON.parse(data);
    const usuario = usuarios.find((usuario) => usuario.id == id);
    if (usuario) {
      return usuario;
    } else {
      return "Usuario no encontrado";
    }
  }

  // * obtener likes de usuario por ID
  async getLikesById(id) {
    // const user = await this.getUserById(id)

    const data = await fs.promises.readFile(
      `${this.archivo}/usuarios.json`,
      "utf-8"
    );
    const usuarios = JSON.parse(data);
    const usuario = usuarios.find((usuario) => usuario.id == id);
    if (usuario) {
      return usuario.likes;
    } else {
      return "Usuario no encontrado";
    }
  }

  // * dar like

  async likePage(usuarioId, paginaId) {
    try {
      // * obtener usuarios
      const data = await this.getAllUsers();
      // * filtrar el usuario
      // * agregar like
      const dataAct = data.map((usuario) => {
        if (usuario.id == usuarioId) {
          usuario.likes.push(paginaId);
        }

        return usuario;
      });
      const dataString = JSON.stringify(dataAct);

      await fs.promises.writeFile(`${this.archivo}/usuarios.json`, dataString);

      return dataAct;
    } catch (e) {
      console.error(e);
    }
  }

  // ? Fan pages

  // * crear pagina
  // * {nombre: string, id: number}
  async createPage(pageObj) {
    // * leer archivo
    const data = await fs.promises.readFile(
      `${this.archivo}/pages.json`,
      "utf-8"
    );
    const paginas = JSON.parse(data);
    // * generar id

    const id = paginas.length + 1;
    pageObj.id = id;

    //* agregamos la pagina
    paginas.push(pageObj);
    const stringPaginas = JSON.stringify(paginas);
    await fs.promises.writeFile(`${this.archivo}/pages.json`, stringPaginas);
    return paginas;
  }

  // * enlistar paginas

  async getAllPages() {
    const data = await fs.promises.readFile(
      `${this.archivo}/pages.json`,
      "utf-8"
    );
    const paginas = JSON.parse(data);
    return paginas;
  }
}
async function start() {
  const db = new baseDeDatos("data");
  // db.createUser({ nombre: "eduardo", correo: "hola@google.com" });
  //   const users = await db.getAllUsers();
  //   console.log(users);
  const usuario = await db.likePage(1, 5);
  console.log(usuario);
}

start();
