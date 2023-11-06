import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Form from './components/Form';
import Products from './components/Products';
import Product from './components/Product';
import Edit from './components/Edit';

function App() {

  return (


    <div className="App">
      <h1>Product Manager</h1>
      <Link to='/'><p>Home</p></Link>
      <Link to='/products/create'><p>Create Product</p></Link>

      <Routes>
        <Route path='/' element={<Products />} />

        <Route path='/products/create' element={<Form />} />
        
        <Route path='/products/:id' element={<Product />} />

        <Route path='/products/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
