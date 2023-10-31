import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {

  const [pokemon, setPokemon] = useState([])

  const getPokemon = (e) => {
    e.preventDefault()
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1292').then(response => {
      setPokemon(response.data.results)
    })
  }

  return (
    <div className="App">
      <form onSubmit={getPokemon}>
        <button>Fetch Pokemon</button>
        {pokemon.map((elem, i) => {
          return <li key={i}>{elem.name}</li>
        })}
      </form>
    </div>
  );
}

export default App;
