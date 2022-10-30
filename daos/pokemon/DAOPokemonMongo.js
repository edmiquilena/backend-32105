import ContenedorMongo from "../../contenedores/ContenedorMongo.js";

class DAOPokemonMongo extends ContenedorMongo {
  constructor() {
    // * super = padre/ContenedorMongo
    super("pokemon", {
      name: String,
      dex: Number,
      types: { type: [], default: [] },
    });
  }
  // async findByName(name) {
  //   console.log(this.db);
  //   return await this.db.findOne({ name });
  // }
}
export default DAOPokemonMongo;
