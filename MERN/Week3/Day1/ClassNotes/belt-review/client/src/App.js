import './App.css';
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <h1>Notes</h1>
      <Link to='/'>Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/notes/create'>Create</Link>
      <hr />

      <Routes>
        {/* REDIRECT */}
        <Route path='/' element={<Navigate to="/notes" />} />

        {/* MAIN DASHBOARD */}
        <Route path='/notes' element={<Dashboard />} />

      </Routes>
    </div>
  );
}

export default App;
