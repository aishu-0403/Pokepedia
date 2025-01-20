const express = require('express');
const Pokemon = require('../models/Pokemon');

const router = express.Router();

// Get Pokémon list with search, filter, and sort
router.get('/', async (req, res) => {
  const { search, type, sort, page = 1 } = req.query;
  const PAGE_SIZE = 10;

  const query = {};
  if (search) query.name = { $regex: search, $options: 'i' };
  if (type) query.type = type;

  const sortOption = sort === 'asc' ? { name: 1 } : sort === 'desc' ? { name: -1 } : null;

  const pokemons = await Pokemon.find(query)
  .sort(sortOption) // Apply sorting only if sortOption is not null
  .skip((page - 1) * PAGE_SIZE)
  .limit(PAGE_SIZE);

  const total = await Pokemon.countDocuments(query);

  res.json({ pokemons, total });
});

// Get Pokémon details
router.get('/:id', async (req, res) => {
  const pokemon = await Pokemon.findOne({ id: req.params.id });
  const similar = await Pokemon.find({ type: { $in: pokemon.type }, id: { $ne: pokemon.id } });
  res.json({ pokemon, similar });
});

// Get all unique Pokémon types
// Get all unique Pokémon types
router.get('/types', async (req, res) => {
    try {
      const types = await Pokemon.distinct('type'); // Fetch distinct types from the database
      res.json(types);
    } catch (error) {
      console.error('Error fetching types:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
module.exports = router;
