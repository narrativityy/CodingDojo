import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {

  const [searchResults, setSearchResults] = useState({})

  const search = (e) => {
    e.preventDefault()
    const url = `https://swapi.dev/api/${e.target[0].value}/${e.target[1].value}`
    axios.get(url).then(response => {
      setSearchResults(response.data)
    })
  }

  const Display = (props) => {
    const {searchResults} = props
    if (JSON.stringify(searchResults) === '{}')
      return
    return (
      <div>
        <p>Name: {searchResults.name}</p>
        <p>Height: </p>
      </div>
    )
  }

  return (
    <div className="App">
      <form onSubmit={search}>
        <label htmlFor="type">Search for: </label>
        <select name="type" id="type">
          <option value="people">people</option>
          <option value="planets">planets</option>
          <option value="starships">starships</option>
        </select>
        <label htmlFor="id">  ID: </label>
        <input type="number" name="id" id="id" />
        <button>Search</button>
      </form>
      <Display searchResults={searchResults}/>
    </div>
  );
}

export default App;
