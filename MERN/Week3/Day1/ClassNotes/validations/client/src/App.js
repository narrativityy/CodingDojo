import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import OneMovie from './components/OneMovie';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <h1>MOVIES 🍿🎥🎞️</h1>
      <Link to="/movies/create">ADD A MOVIE ➕</Link> |
      <Link to="/">Home 🏠</Link>


      <Routes>

        {/* DASHBOARD */}
        <Route path='/' element={<Main />} />

        {/* READ ONE */}
        <Route path='/movies/:id' element={<OneMovie />} />

        {/* CREATE */}
        <Route path='/movies/create' element={<Create />} />

        {/* UPDATE */}
        <Route path='/movies/:id/update' element={<Update />} />


      </Routes>


    </div>
  );
}

export default App;
