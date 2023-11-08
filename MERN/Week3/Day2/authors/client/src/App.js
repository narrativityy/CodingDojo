import {Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
  return (
    <div>
      <h1>Favorite Authors</h1>
      <Routes>
        {/* ROOT REDIRECT */}
        <Route path='/' element={<Navigate to='/authors' />} />

        {/* DASHBOARD */}
        <Route path='/authors' element={<Dashboard />} />

        {/* CREATE */}
        <Route path='/authors/new' element={<Create />} />

        {/* EDIT */}
        <Route path='/authors/edit/:id' element={<Edit />} />

      </Routes>
    </div>
  );
}

export default App;
