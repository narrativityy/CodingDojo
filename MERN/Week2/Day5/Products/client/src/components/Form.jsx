import React, {useState} from 'react'
import axios from 'axios'

const Form = () => {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(null)
  const [description, setDescription] = useState('')

  const addProduct = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8001/api/products', {
      title,
      price,
      description
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <form onSubmit={addProduct}>
        <label htmlFor="title">Title: </label>
        <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" value={title} />
        <br />

        <label htmlFor="price">Price: </label>
        <input onChange={(e) => setPrice(e.target.value)} type="number" name="price" id="price" value={price} />
        <br />

        <label htmlFor="description">Description: </label>
        <input onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="description" value={description} />
        <br />

        <button>Create</button>
    </form>
  )
}

export default Form