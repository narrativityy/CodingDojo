import React, { useState } from 'react'
import Display from './Display'

const Form = (props) => {

  const [carModel, setCarModel] = useState('')
  const [hp, setHp] = useState(100)
  const [color, setColor] = useState('blue')
  const [carList, setCarList] = useState([
    {carModel: 'Nissan', hp: 100, color: 'red'}, 
    {carModel: 'Audi', hp: 335, color: 'blue'}])

  const submitHandler = (e) => {
    e.preventDefault()

    const carObj = {
      carModel,
      hp: Number(hp),
      color
    }
    setCarList([...carList, carObj])

    setCarModel('')
    setHp(100)
    setColor('blue')
  }

  return (
    <fieldset>
      <legend>Form.jsx</legend>

      <form onSubmit={submitHandler}>
        <div>
          <label>Car Model: </label>
          <input type="text" onChange={(e) => setCarModel(e.target.value)} value={carModel} />
        </div>
        <div>
          <label >HP: </label>
          <input type="text" onChange={(e) => setHp(e.target.value)} value={hp} />
        </div>
        <div>
          <label>Color: </label>
          <input type="color" onChange={(e) => setColor(e.target.value)} value={color} />
        </div>

        <br />
        <button>Create Car</button>
      </form>

      <hr />

      <Display carList={carList} />
    </fieldset>
  )
}

export default Form