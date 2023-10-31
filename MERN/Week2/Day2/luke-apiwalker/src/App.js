import './App.css';
import {Routes, Route, useNavigate} from "react-router-dom";
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships'
import Error from './components/Error';

function App() {

  const navigate = useNavigate()

  const search = (e) => {
    e.preventDefault()
    navigate(`/${e.target[0].value}/${e.target[1].value}`)
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
      <Routes>
        <Route path='/people/:id' element={<People />} />
        <Route path='/planets/:id' element={<Planets />} />
        <Route path='/starships/:id' element={<Starships />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
