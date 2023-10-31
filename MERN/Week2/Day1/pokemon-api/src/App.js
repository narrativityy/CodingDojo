import './App.css';
import {useState} from 'react'

function App() {

  const [pokemon, setPokemon] = useState([])

  const getPokemon = (e) => {
    e.preventDefault()
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1292")
    .then(response => {
      // not the actual JSON response body but the entire HTTP response
      return response.json();
    }).then(response => {
        // we now run another promise to parse the HTTP response into usable JSON
      setPokemon(response.results)
    }).catch(err=>{
        console.log(err);
    });
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
