import './App.css'
import React from "react";
import {Link, Routes, Route} from "react-router-dom";
import { useParams } from "react-router";
import Hero from "./components/Hero";
import Form from './components/Form';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className='App'>
      <h1>routing with heroes🦸</h1>
      <Link to='/hero/1'>go to hero page</Link>
      <Link to='/hero/form'>FORM</Link>
      <hr />
      <Routes>
        {/* HERO */}
        <Route path='/hero/:heroId' element={<Hero />} />

        {/* FORM */}
        <Route path='/hero/form' element={<Form />} />

        {/* ERROR */}
        <Route path='/error' element={<ErrorPage />} />

      </Routes>
    </div>
  );
}

export default App;