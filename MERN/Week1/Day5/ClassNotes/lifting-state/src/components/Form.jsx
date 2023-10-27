import React, {useState} from 'react'

const Form = (props) => {

  const [name, setName] = useState('')
  const [height, setHeight] = useState(0)
  const [color, setColor] = useState('#000000')

  const createPerson = (e) => {
    e.preventDefault()

    const newPerson = {
      name,
      height,
      color
    }

    props.addPersonToPeople(newPerson)

    setName('')
    setHeight(0)
    setColor('#000000')
  }

  return (
    <fieldset>
      <legend>Form.jsx</legend>

      <form onSubmit={createPerson}>
        <div>
          <label>Name: </label>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        </div>

        <div>
          <label>Height: </label>
          <input type="number" onChange={(e) => setHeight(e.target.value)} value={height} />
        </div>

        <div>
          <label>Color: </label>
          <input type="color" onChange={(e) => setColor(e.target.value)} value={color} />
        </div>

        <br />

        <button>add to party list</button>
      </form>
    </fieldset>
  )
}

export default Form