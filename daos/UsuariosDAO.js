import ContenedorMongoDb from "../contenedores/contenedorMongoDb.js";

class DAOUsuarios extends ContenedorMongoDb {
  constructor() {
    super("usuarios", {
      username: { type: String, required: true },
      password: { type: String, required: true },
      // 0 usuario, 1 mod, 2 admin
      rank: { type: Number, required: true, default: 0 },
    });
  }
}
export default DAOUsuarios;
