import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {

  const navigate = useNavigate()

  const {id} = useParams()

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(-1)
  const [description, setDescription] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:8001/api/products/${id}`)
      .then(res => {
        console.log(res.data)
        setTitle(res.data.title)
        setPrice(res.data.price)
        setDescription(res.data.description)
      })
      .catch(err => console.log(err))
  }, [id])

  const updateProduct = (e) => {
    e.preventDefault()
    axios.patch(`http://localhost:8001/api/products/${id}`, {
      title,
      price,
      description
    })
      .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <form onSubmit={updateProduct}>
      <label htmlFor="title">Title: </label>
      <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" value={title} />
      <br />

      <label htmlFor="price">Price: </label>
      <input onChange={(e) => setPrice(e.target.value)} type="number" name="price" id="price" value={price} />
      <br />

      <label htmlFor="description">Description: </label>
      <input onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="description" value={description} />
      <br />

      <button>Edit</button>
    </form>
  )
}

export default Edit