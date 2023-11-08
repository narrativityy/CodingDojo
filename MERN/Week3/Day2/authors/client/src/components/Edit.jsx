import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate, useParams} from 'react-router-dom'

const Edit = (props) => {

  const navigate = useNavigate()

  const {id} = useParams()

  const [name, setName] = useState('')

  const [errors, setErrors] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8001/api/authors/${id}`)
      .then(res => {
        console.log(res.data)
        setName(res.data.name)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])

  const submitHandler = (e) => {
    e.preventDefault()

    axios.patch(`http://localhost:8001/api/authors/${id}`, {name})
      .then(res => {
        console.log(res)
        navigate('/authors')
      })
      .catch(err => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
      })
  }

  return (
    <div>
      <Link to='/authors'>Home</Link>
      <p style={{color: 'purple'}}>Edit author:</p>
      {errors.map((elem, i) => {
        return <div key={i} style={{color: 'red'}}>
          {elem}
        </div>
      })}
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button onClick={() => navigate('/authors')}>Cancel</button>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Edit