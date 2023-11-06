import './App.css';
import {Routes, Route} from "react-router-dom";
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships'
import Error from './components/Error';

function App() {


  return (
    <div className="App">
      <Form />

      <Routes>
        {/* PEOPLE SEARCH */}
        <Route path='/people/:id' element={<People />} />

        {/* PLANET SEARCH */}
        <Route path='/planets/:id' element={<Planets />} />

        {/* STARSHIP SEARCH */}
        <Route path='/starships/:id' element={<Starships />} />

        {/* ERROR PAGE */}
        <Route path='/error' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
