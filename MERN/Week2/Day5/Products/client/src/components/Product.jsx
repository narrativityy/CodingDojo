import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Product = () => {

  const {id} = useParams()

  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:8001/api/products/${id}`)
      .then(res => {
        console.log(res.data)
        setProduct(res.data)
      })
      .catch(err => console.log(err))
  }, [id])

  return (
    <div>
      {product ? (
      <div>
        <p>Title: {product.title}</p>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
      </div>
      ) : <p>loading...</p>}
    </div>
  )
}

export default Product