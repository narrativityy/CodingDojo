import React from 'react'

const Display = (props) => {
  return (
    <fieldset>
      <legend>Display.jsx</legend>
      {
        props.people.map((elem, i) => {
          return (
            <div key={i} style={{backgroundColor: elem.color}}>
              <h3>{elem.name}</h3>
              <h3>Height: {elem.height}ft</h3>
            </div>
          )
        })
      }
    </fieldset>
  )
}

export default Display