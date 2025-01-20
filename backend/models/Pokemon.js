const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  type: [String],
  image: String,
  height: Number,
  weight: Number,
  stats: {
    hp: Number,
    attack: Number,
    defense: Number,
    specialAttack: Number,
    specialDefense: Number,
    speed: Number,
  },
});

module.exports = mongoose.model('Pokemon', PokemonSchema);
