import React from 'react'

const Person = (props) => {
  const {person} = props
  return (
    <fieldset>
      <legend>Person.jsx</legend>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Favorite Food: {person.favFood}</p>
    </fieldset>
  )
}

export default Person