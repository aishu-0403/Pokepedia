const API_URL = 'http://localhost:5000/api/pokemon';
const pokemonDetails = document.getElementById('pokemonDetails');
const similarPokemon = document.getElementById('similarPokemon');

// Get Pokémon ID from the URL
const params = new URLSearchParams(window.location.search);
const pokemonId = params.get('id');

// Fetch Pokémon details and similar Pokémon
async function fetchPokemonDetails() {
  const response = await fetch(`${API_URL}/${pokemonId}`);
  const { pokemon, similar } = await response.json();

  // Display Pokémon details
  
     pokemonDetails.innerHTML = `
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <div class="details-info">
        <h2>${pokemon.name}</h2>
      </div>
    `;

    // Display Type, Height, Weight, and Stats as cards
    pokemonCards.innerHTML = `
      <div class="details-card">
        <h3>Type</h3>
        <p>${pokemon.type.join(', ')}</p>
      </div>
      <div class="details-card">
        <h3>Height</h3>
        <p>${pokemon.height}</p>
      </div>
      <div class="details-card">
        <h3>Weight</h3>
        <p>${pokemon.weight}</p>
      </div>
      <div class="details-card">
        <h3>Stats</h3>
        <p>HP: ${pokemon.stats.hp}</p>
        <p>Attack: ${pokemon.stats.attack}</p>
        <p>Defense: ${pokemon.stats.defense}</p>
        <p>Special Attack: ${pokemon.stats.specialAttack}</p>
        <p>Special Defense: ${pokemon.stats.specialDefense}</p>
        <p>Speed: ${pokemon.stats.speed}</p>
      </div>
    `;

  // Display similar Pokémon
  similarPokemon.innerHTML = similar
    .map(
      (p) => `
    <div class="pokemon-card">
      <img src="${p.image}" alt="${p.name}">
      <h2>ID: ${p.id}</h2>
      <h3>${p.name}</h3>
      <p>Type: ${p.type.join(', ')}</p>
    </div>`
    )
    .join('');
}

// Fetch details on page load
fetchPokemonDetails();
