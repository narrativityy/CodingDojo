import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const person1 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 45,
    hairColor: "Black"
  }
  const person2 = {
    firstName: 'John',
    lastName: 'Smith',
    age: 88,
    hairColor: "Brown"
  }
  const person3 = {
    firstName: 'Millard',
    lastName: 'Fillmore',
    age: 50,
    hairColor: "Brown"
  }
  const person4 = {
    firstName: 'Maria',
    lastName: 'Smith',
    age: 62,
    hairColor: "Brown"
  }
  const people = [person1, person2, person3, person4]
  return (
    <div className='App'>
      {people.map((person) => {
        return <PersonCard person={person}/>
      })}
    </div>
  );
}

export default App;
