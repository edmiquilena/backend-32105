import { application } from "express";
import daos from "./daos/index.js";

(async () => {
  const { trainerDAO, pokemonDAO } = await daos();
  await pokemonDAO.save({
    name: "Bulbasaur",
    dex: 1,
    types: ["Grass", "Poison"],
  });
  console.log(await pokemonDAO.findAll());
  //  console.log(await pokemonMongo.findByName("Bulbasaur"));
  //console.log(await trainerMongo.findById("635c56101795f3da84d46c51"));
})();

app.put("/trainer/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  await pokemonDAO.update(body);
  // {
  //     _id: new ObjectId("635c5fce4fb67fb7ebfc0c17"),
  //     name: 'Piplup',
  //     dex: 1,
  //     types: [ 'Grass', 'Poison' ],
  //     __v: 0
  //   }
});
