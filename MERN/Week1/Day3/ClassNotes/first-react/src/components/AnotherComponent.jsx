import React from 'react'

const AnotherComponent = (props) => {
  const {num, animals} = props
  console.log(props)
  return (
    <fieldset>
        <legend>AnotherComponent.jsx</legend>
        <h3>hello from another component {num}</h3>
        {animals}
    </fieldset>
  )
}

export default AnotherComponent