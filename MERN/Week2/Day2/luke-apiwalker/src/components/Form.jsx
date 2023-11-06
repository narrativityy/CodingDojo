import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Form = () => {
  
  const navigate = useNavigate()

  const [type, setType] = useState('people')

  const search = (e) => {
    e.preventDefault()
    navigate(`/${type}/${e.target[1].value}`)
  }

  return (
    <form onSubmit={search}>
      <label htmlFor="type">Search for: </label>
      <select onChange={(e) => setType(e.target.value)} name="type" id="type" value={type}>
        <option value="people">people</option>
        <option value="planets">planets</option>
        <option value="starships">starships</option>
      </select>
      <label htmlFor="id">  ID: </label>
      <input type="number" name="id" id="id" />
      <button>Search</button>
    </form>
  )
}

export default Form