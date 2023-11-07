import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = (props) => {

  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isImportant, setIsImportant] = useState(false)

  const [errors, setErrors] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    axios.post('http://localhost:8001/api/notes', {
      title,
      content,
      isImportant
    })
      .then(res => {
        console.log(res)
        navigate('/notes')
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
      {errors.map((elem, i) => {
        return <div key={i} style={{color: 'red'}}>
          {elem}
        </div>
      })}
      <form onSubmit={submitHandler}>
        <div>
          <label>Title: </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
          <label>Content: </label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>

        <div>
          <input type="checkbox" checked={isImportant} onChange={(e) => setIsImportant(e.target.checked)} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Create