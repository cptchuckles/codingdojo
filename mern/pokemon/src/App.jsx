import { useState } from 'react'
import './App.css'
import axios from 'axios';

const TheTotalNumberOfPokemansThatHaveEverBeenCreatedInTheHistoryOfAllPokemans = 151;

function App() {
  const [pokemans, catchPokemans] = useState([]);

  async function axiosThePokemans() {
    const axiosResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${TheTotalNumberOfPokemansThatHaveEverBeenCreatedInTheHistoryOfAllPokemans}&offset=0`);
    catchPokemans(axiosResponse.data.results);
  }

  return (
    <>
      <h1>Pokeymans</h1>
      <button onClick={axiosThePokemans}>catch the pokey mans</button>
      {
        pokemans.length > 0
        ? <ol>
            { pokemans.map((poke, i) => (
              <li key={i}>{poke.name}</li>
            )) }
          </ol>
        : <p>(Pokemans go here)</p>
      }
    </>
  )
}

export default App
