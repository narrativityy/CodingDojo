import React from 'react'
import Weapon from './Weapon'

const Ninja = (props) => {

  const {ninja} = props

  return (
    <fieldset>
      <legend>Ninja.jsx</legend>
      <p>Name: {ninja.name}</p>
      <p>Power Level: {ninja.powerLevel}</p>
      <Weapon weapon='sword'/>
    </fieldset>
  )
}

export default Ninja