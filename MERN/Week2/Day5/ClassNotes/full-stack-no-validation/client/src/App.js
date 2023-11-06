import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Main from './components/Main';
import OneMovie from './components/OneMovie';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <h1>MOVIES</h1>
      <Link to='/'>Home</Link> |
      <Link to='/movies/create'> Create</Link>

      <Routes>

        {/* DASHBOARD */}
        <Route path='/' element={<Main />} />

        {/* READ ONE */}
        <Route path='/movies/:id' element={<OneMovie />} />

        {/* CREATE */}
        <Route path='/movies/create' element={<Create />} />

      </Routes>
    </div>
  );
}

export default App;
