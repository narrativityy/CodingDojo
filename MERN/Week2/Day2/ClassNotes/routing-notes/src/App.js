import React from "react";
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
import { useParams } from "react-router";
import Survey from "./components/Survey";
    
const Location = (props) => { 
  const { city } = useParams(); // matches our :city in our Routes
    
  return (
    <h1>Welcome to { city }!</h1>
  );
}
    
function App() {
  return (
    <div>
      <p>
        <Link to="/location/seattle">Seattle</Link>
        |
        <Link to="/location/chicago">Chicago</Link>
        |
        <Link to="/location/burbank">Burbank</Link>
      </p>
      <Routes>
        <Route path="/location/:city" element={<Location />}/>
      </Routes>
      <Survey />
    </div>
  );
}
    
export default App;
