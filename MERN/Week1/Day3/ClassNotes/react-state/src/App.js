import './App.css';
import { useState } from 'react'

function App() {

  const ninja = {
    name: "Raphael",
    powerLevel: 100
  }

  // create state for this component
  const [num, setNum] = useState(11)
  const [ninjaObj, setNinjaObj] = useState(ninja)

  // increment function
  const incrementNum = () => {
    setNum(num + 1)
  }

  const levelUp = () => {
    setNinjaObj({...ninjaObj, powerLevel: ninjaObj.powerLevel + 1})
  }

  return (
    <div className="App">
      <p>test</p>
      <h1>state {num}</h1>
      <p>
        <button onClick={ incrementNum }>increment</button>
      </p>
      <p>{JSON.stringify(ninjaObj)}</p>
      <button onClick={ levelUp }>Level Up</button>
    </div>
  );
}

export default App;
