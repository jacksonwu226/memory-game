class API {
  constructor() {
    this.baseURL = `https://pokeapi.co/api/v2/pokemon/`;
  }

  async fetchPokemon(pokemon) {
    try {
      const response = await fetch(this.baseURL + pokemon, {
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const responseJSON = await response.json();
      return {
        name: responseJSON.name,
        img: responseJSON.sprites.front_default,
        clicked: false,
      };
    } catch (error) {
      console.log("Error in getting Pokémon data:", error);
    }
  }

  async fetchMultiplePokemon(pokemonArray){
    try{
      const promises = pokemonArray.map((pokemon) => this.fetchPokemon(pokemon));
      const pokemonData = await Promise.all(promises);
      return pokemonData;
    } catch (error) {
      console.log("Error in getting multiple Pokémon data: ", error);
    }
  }
}

export default API;
