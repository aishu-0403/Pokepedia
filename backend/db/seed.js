const mongoose = require('mongoose');
const axios = require('axios');
const Pokemon = require('../models/Pokemon');

mongoose.connect('mongodb+srv://aiswarya2111025:MaTaAdNa2022%23@cluster0.dhmtg.mongodb.net/pokemon?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seedData() {
  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
    for (let item of data.results) {
      const details = await axios.get(item.url);
      const pokemon = new Pokemon({
        id: details.data.id,
        name: details.data.name,
        type: details.data.types.map((t) => t.type.name),
        image: details.data.sprites.front_default,
        height: details.data.height,
        weight: details.data.weight,
        stats: {
          hp: details.data.stats[0].base_stat,
          attack: details.data.stats[1].base_stat,
          defense: details.data.stats[2].base_stat,
          specialAttack: details.data.stats[3].base_stat,
          specialDefense: details.data.stats[4].base_stat,
          speed: details.data.stats[5].base_stat,
        },
      });
      await pokemon.save();
    }
    console.log('Database seeded successfully');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedData();
