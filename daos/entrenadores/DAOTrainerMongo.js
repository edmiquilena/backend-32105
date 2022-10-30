import ContenedorMongo from "../../contenedores/ContenedorMongo.js";

class DAOTrainerMongo extends ContenedorMongo {
  constructor() {
    // * super = padre/ContenedorMongo
    super("trainers", {
      name: String,
      pokemon: { type: [], required: true, default: [] },
    });
  }

  async addMoney() {}
}
export default DAOTrainerMongo;
