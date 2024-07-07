import '.../styles/header.css';

export default function Header({score, bestScore}){
  return(
    <header>
      <h1 className='title'>Memory Card</h1>
      <p>Click on all the pokemons only once!</p>
      <div className="score-board">
        <p className="score">Score: {score}</p>
        <p className="best-score">Highest Score: {bestScore}</p>
      </div>
    </header>
  )
}