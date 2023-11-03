import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8001/api/products')
      .then(res => {
        console.log(res.data)
        setProducts(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {products.map((elem, i) => {
        return (
          <div key={i}>
            <Link to={`/products/${elem._id}`}><p>Title: {elem.title}</p></Link>
            <p>Price: ${elem.price}</p>
            <p>Description: {elem.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Products