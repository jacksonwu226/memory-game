import { useEffect, useState } from "react";
import API from "./API";

const api = new API();

const pokemonArray = [
  'pikachu',
  'bulbasaur',
  'charmander',
  'squirtle',
  'jigglypuff',
  'meowth',
  'psyduck',
  'snorlax',
  'eevee',
  'vulpix',
  'gengar',
  'mewtwo'
];

function MainContent({score, setScore, bestScore, setBestScore}) {
  api.fetchMultiplePokemon(pokemonArray).then((pokemonList) => console.log(pokemonList));
};

export default MainContent