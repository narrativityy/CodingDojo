import React, {useState} from 'react'

const Form = (props) => {
  const [color, setColor] = useState('#000000')
  const {addBox} = props

  const addColor = (e) => {
    e.preventDefault()

    const newColor = e.target[0].value
    addBox(newColor)

    setColor('#000000')
  }

  return (
    <div style={{margin: '10px'}}>
      <form onSubmit={addColor}>
        <label>Color </label>
        <input type="color" onChange={(e) => setColor(e.target.value)} value={color} />
        <button style={{marginLeft: '10px'}}>Add</button>
      </form>

    </div>
  )
}

export default Form