import './App.css';
import {useState} from 'react'
import Display from './components/Display';
import Form from './components/Form';

function App() {

  const [boxes, setBoxes] = useState(['#000', '#662299'])

  const addBox = (color) => {
    setBoxes([...boxes, color])
  }

  return (
    <div className="App">
      <Form addBox={addBox}/>
      <Display boxes={boxes}/>
    </div>
  );
}

export default App;
