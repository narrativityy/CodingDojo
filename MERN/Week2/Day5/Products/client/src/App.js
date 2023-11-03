import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Form from './components/Form';
import Products from './components/Products';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Link to='/'><p>Home</p></Link>

      <Routes>
        <Route path='/' element={<div><Form /> <Products /></div>} />
        
        <Route path='/products/:id' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
