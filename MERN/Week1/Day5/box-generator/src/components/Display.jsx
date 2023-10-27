import React from 'react'

const Display = (props) => {
  const {boxes} = props

  return (
    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
      {boxes.map((elem, i) => {
        return (
          <div key={i} style={{height: '100px', width: '100px', margin: '10px', backgroundColor: elem}}></div>
        )
      })}
    </div>
  )
}

export default Display