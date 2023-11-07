import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()

  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8001/api/notes')
      .then(res => {
        console.log(res)
        setNotes(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8001/api/notes/${id}`)
      .then(res => {
        console.log(res.data)
        const filteredNotes = notes.filter((elem) => {
          return id !== elem._id
        })
        setNotes(filteredNotes)
      })
      .catch(err => console.log(err))
  }

  const goToUpdate = (id) => {
    navigate(`/notes/update/${id}`)
  }

  return (
    <div>
      {notes.map((elem) => {
        return (
          <div key={elem._id} style={{backgroundColor: 'lightyellow'}}>
            <Link to={`/notes/${elem._id}`}><h3><span>{elem.isImportant ? "📌 " : ""}</span>{elem.title}</h3></Link>
            <p>{elem.content}</p>
            <p>{elem.createdAt}</p>
            <button onClick={() => goToUpdate(elem._id)}>edit</button>
            <button onClick={() => deleteHandler(elem._id)}>delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default Dashboard