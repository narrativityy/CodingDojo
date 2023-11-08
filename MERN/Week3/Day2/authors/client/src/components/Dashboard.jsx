import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Dashboard = (props) => {

  const navigate = useNavigate()

  const [authors, setAuthors] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8001/api/authors`)
      .then(res =>  {
        console.log(res.data)
        setAuthors(res.data)
      })
      .catch(err => console.log(err))
  }, [])


  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8001/api/authors/${id}`)
      .then(res => {
        console.log(res)
        const filteredAuthors = authors.filter((elem) => {
          return id !== elem._id
        })
        setAuthors(filteredAuthors)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <Link to='/authors/new'>Add an author</Link>
      <p style={{color: 'purple'}}>We have quotes by:</p>
      <table>
        <tr>
          <th>Author</th>
          <th>Actions available</th>
        </tr>
        {authors.map((elem) => {
          return <tr key={elem._id}>
            <td style={{color: 'purple'}}>{elem.name}</td>
            <td><button onClick={() => navigate(`/authors/edit/${elem._id}`)} style={{backgroundColor: 'brown'}}>Edit</button><button onClick={() => deleteHandler(elem._id)} style={{backgroundColor: 'red'}}>Delete</button></td>
          </tr>
        })}
      </table>
    </div>
  )
}

export default Dashboard