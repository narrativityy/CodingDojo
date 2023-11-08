import React, {useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Create = (props) => {

  const navigate = useNavigate()

  const [name, setName] = useState('')

  const [errors, setErrors] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    axios.post(`http://localhost:8001/api/authors`, {name})
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
      <p style={{color: 'purple'}}>Add a new author:</p>
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

export default Create