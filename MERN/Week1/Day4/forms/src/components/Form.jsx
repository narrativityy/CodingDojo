import React, { useState } from 'react'

const Form = (props) => {

  // CREATE STATE VARS for this component / for the inputs
  const [animal, setAnimal] = useState('')
  const [zoo, setZoo] = useState([])

  // form submit function
  const createAnimal = (e) => {
    e.preventDefault()
    setZoo([...zoo, animal])
    setAnimal('')
  }

  return (
    <fieldset>
      <legend>Form.jsx</legend>
      {JSON.stringify(animal)}
      <br />
      {JSON.stringify(zoo)}

      <form onSubmit={createAnimal}>
        <p>enter animal emoji: <input onChange={ (e) => setAnimal(e.target.value) } value={animal}/></p>
        <button>Create</button>
      </form>

      <hr />
      {zoo.map( (elem, ind) => {
        return (<li key={ind}>{elem}</li>)
      })}
    </fieldset>
  )
}

export default Form