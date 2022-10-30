import * as dotenv from "dotenv";
dotenv.config();
console.log(process.env.TIPO);
const daos = {
  mongo: async () => {
    const { default: DAOTrainerMongo } = await import(
      "./entrenadores/DAOTrainerMongo.js"
    );
    const { default: DAOPokemonMongo } = await import(
      "./pokemon/DAOPokemonMongo.js"
    );
    return {
      trainerDAO: new DAOTrainerMongo(),
      pokemonDAO: new DAOPokemonMongo(),
    };
  },
  mem: async () => {
    const { default: DAOTrainerMem } = await import(
      "./entrenadores/DAOTrainerMem.js"
    );
    const { default: DAOPokemonMem } = await import(
      "./pokemon/DAOPokemonMem.js"
    );
    return {
      trainerDAO: new DAOTrainerMem(),
      pokemonDAO: new DAOPokemonMem(),
    };
  },
};

export default daos[process.env.TIPO];
