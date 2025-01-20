const API_URL = 'http://localhost:5000/api/pokemon';
const pokemonList = document.getElementById('pokemonList');
const searchInput = document.getElementById('search');
const typeFilter = document.getElementById('typeFilter');
const sortOrder = document.getElementById('sortOrder');
const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');

let currentPage = 1;

async function fetchPokemons() {
  const search = searchInput.value;
  const type = typeFilter.value;
  const sort = sortOrder.value;

  const response = await fetch(`${API_URL}?search=${search}&type=${type}&sort=${sort}&page=${currentPage}`);
  const data = await response.json();

  displayPokemons(data.pokemons);
  prevPage.disabled = currentPage === 1;
  nextPage.disabled = currentPage * 10 >= data.total;
  
}

function displayPokemons(pokemons) {
    pokemonList.innerHTML = pokemons
    .map(
      (p) => `
    <a href="./details.html?id=${p.id}" class="pokemon-card">
      <div>
        <img src="${p.image}" alt="${p.name}">
        <h2>ID: ${p.id}</h1>
        <h3>${p.name}</h3>
        <p>Type: ${p.type.join(', ')}</p>
      </div>
    </a>`
    )
    .join('');
}



// Fetch all Pokémon types dynamically from the backend
async function fetchPokemonTypes() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/type");
    const types = await response.json();
   
    // Populate the dropdown
    const typeFilter = document.getElementById("typeFilter");
    typeFilter.innerHTML += types.results.map(type => `<option value="${type.name}">${type.name}</option>`).join("");
  } catch (error) {
    console.error('Error fetching Pokémon types:', error);
  }
}

// Call this function when the page loads


prevPage.addEventListener('click', () => {
    currentPage--;
    fetchPokemons();
  });
  
nextPage.addEventListener('click', () => {
    currentPage++;
    fetchPokemons();
  });
  searchInput.addEventListener('input', () => {
    currentPage = 1; // Reset to the first page
    fetchPokemons();
  });
typeFilter.addEventListener('change', () => {
    currentPage = 1; // Reset to the first page
    fetchPokemons(); // Refetch Pokémon based on the selected type
  });
  
  sortOrder.addEventListener('change', () => {
    currentPage = 1; // Reset to the first page
    fetchPokemons();
  });

fetchPokemons();
fetchPokemonTypes();
