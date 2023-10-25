import React from 'react'

const Weapon = (props) => {

  const {weapon} = props

  return (
    <fieldset>
        <legend>Weapon.jsx</legend>
        <p>Weapon: {weapon}</p>
    </fieldset>
  )
}

export default Weapon