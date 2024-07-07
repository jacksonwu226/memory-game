import '../styles/header.css';

export default function Header({score, bestScore}){
  return(
    <>
      <h1 className='title'>Memory Card</h1>
      <p>Click on all the pokemons only once!</p>
    </>
  )
}