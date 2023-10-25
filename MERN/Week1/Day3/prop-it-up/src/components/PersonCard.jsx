import React, {useState} from 'react'

const PersonCard = (props) => {
  const {person} = props

  const [personObj, setPersonObj] = useState(person)

  const increaseAge = () => {
    setPersonObj({...personObj, age: personObj.age + 1})
  }
  return (
    <div>
      <h1>{personObj.lastName}, {personObj.firstName}</h1>
      <p>Age: {personObj.age}</p>
      <p>Hair Color: {personObj.hairColor}</p>
      <button onClick={increaseAge}>Birdthay Button for {personObj.firstName} {personObj.lastName}</button>
    </div>
  )
}

export default PersonCard