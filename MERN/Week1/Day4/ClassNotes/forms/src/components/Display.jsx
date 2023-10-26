import React from 'react'

const Display = (props) => {
  
  const {carList} = props

  return (
    <fieldset>
      <legend>Display.jsx</legend>
      {carList.map((elem, i) => {
        return (
          <div key={i} style={{color: elem.color}}>
            <p>Car Model: {elem.carModel}</p>
            <p>HP: {elem.hp}</p>
          </div>
        )
      })}
    </fieldset>
  )
}

export default Display