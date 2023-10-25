import './App.css';
import AnotherComponent from './components/AnotherComponent';
import Person from './components/Person';

function App() {
  const name = 'jake'
  const animals = ['lion', 'giraffre', 'zebra', 'croc']
  const person = {
    name: 'Bob',
    favFood: 'spaghetti',
    age: 45
  }

  return (
    <div className='App'>
      <fieldset>
        <legend>App.js</legend>
        <h1>hello {name}</h1>
        <AnotherComponent num={100} animals={        
        <div>
          <ul>
          {
            animals.map((elem) => {
              return <li key={elem}>hello {elem}</li>
            })
          }
          </ul>
        </div>}/>
        <p>another p tag</p>
        <Person person={person}/>
      </fieldset>
    </div>
  );
}

export default App;