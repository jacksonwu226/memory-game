import { useEffect, useState } from "react";
import API from "./API";
import Card from "./Card";
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

function shuffleList(list){
  let currentIndex = list.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = list[currentIndex];
    list[currentIndex] = list[randomIndex];
    list[randomIndex] = temporaryValue;
  }

  return list;
}

function MainContent({score, setScore, bestScore, setBestScore}) {
  
  const [pokemonList, setPokemonList] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  console.log(isGameOver);
  console.log(score);
  console.log(bestScore);
  useEffect(() => {
    const fetchPokemonData = async() => {
      const fetchedPokemonList = await api.fetchMultiplePokemon(pokemonArray);
      const editedPokemonList = fetchedPokemonList.map(pokemon => ({
        ...pokemon,
        isClicked: false,
      }));
      setPokemonList(editedPokemonList);
    }
    fetchPokemonData();
  }, []);

  const resetGame = () => {
    setScore(0);
    setIsGameOver(false);
    // reset pokemon list
    const newList = pokemonList.map(pokemon => ({...pokemon, isClicked : false}));
    const shuffledList = shuffleList(newList)
    setPokemonList(shuffledList);
  };
  const updateScores = () => {
    setScore(prevScore => prevScore+1);
    if(score + 1 > bestScore){
      setBestScore(score + 1);
    }
  };

  const onCardClick = (index) => {
    const clickedPokemon = pokemonList[index];
    if(clickedPokemon.isClicked){
      setIsGameOver(true);
      return;
    }
    const updatedPokemonList = pokemonList.map((pokemon, i) => {
      if(i === index){
        return{
          ...pokemon,
          isClicked: true
        }
      }
      return pokemon;
    })
    const shuffledList = shuffleList(updatedPokemonList);
    setPokemonList(shuffledList);
    updateScores();
  }

  return (
    <>
      {isGameOver ?
        <div className="game-over-modal">
          <div className="modal-content">
            <h1>Game over!</h1>
            <p>Your current score: {score}</p>
            <p>Your highest score: {bestScore}</p>
            <button type="button" onClick={resetGame}>Restart Game</button>
          </div>
        </div>
        : null}
      <div className="card-container"> 
        {pokemonList.map((item,index)=>{
            return <Card key={index} link={item.img} name={item.name} onClick={ () => onCardClick(index)}/>
        })}
      </div>
    </>
  )
};

export default MainContent