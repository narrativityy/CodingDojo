import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Dashboard = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8001/api/notes')
      .then(res => {
        console.log(res)
        setNotes(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {notes.map((elem) => {
        return (
          <div key={elem._id} style={{backgroundColor: 'lightyellow'}}>
            <h3>
              <span>{elem.isImportant ? "📌 " : ""}</span>
              {elem.title}
            </h3>
            <p>{elem.content}</p>
            <p>{elem.createdAt}</p>
            <button>edit</button>
            <button>delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default Dashboard