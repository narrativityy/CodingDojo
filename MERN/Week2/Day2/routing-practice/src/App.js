import './App.css';
import {Link, Routes, Route} from 'react-router-dom'
import { useParams } from "react-router";

function App() {

  const Home = () => {
    return <h1>Welcome</h1>
  }

  const NumberOrWord = (props) => {
    const {input} = useParams()

    if (isNaN(input))
      return <p>The word is {input}</p>

    return <p>The number is: {input}</p>
  }

  const ColoredWord = (props) => {
    const {word, textColor, backgroundColor} = useParams()

    return <p style={{color: textColor, backgroundColor: backgroundColor}}>{word}</p>
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/:input' element={<NumberOrWord />} />
        <Route path='/:word/:textColor/:backgroundColor' element={<ColoredWord />} />
      </Routes>
    </div>
  );
}

export default App;
