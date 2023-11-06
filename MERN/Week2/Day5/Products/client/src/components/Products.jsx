import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Products = (props) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8001/api/products')
      .then(res => {
        console.log(res.data)
        setProducts(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const deletePerson = (id) => {
    axios.delete(`http://localhost:8001/api/products/${id}`)
      .then(res => removeFromDom(id))
      .catch(err => console.log(err))
  }

  const removeFromDom = id => {
    setProducts(products.filter(product => product._id !== id))
  }

  return (
    <div>
      {products.map((elem, i) => {
        return (
          <div key={i}>
            <Link to={`/products/${elem._id}`}><p>Title: {elem.title}</p></Link>
            <p>Price: ${elem.price}</p>
            <p>Description: {elem.description}</p>
            <Link to={`/products/edit/${elem._id}`}><p>Edit</p></Link>
            <button onClick={deletePerson(elem._id)}>Delete</button>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Products