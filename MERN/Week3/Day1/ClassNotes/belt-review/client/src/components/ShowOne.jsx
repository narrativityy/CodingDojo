import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ShowOne = (props) => {

  const {id} = useParams()

  const [note, setNote] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:8001/api/notes/${id}`)
      .then(res => {
        console.log(res.data)
        setNote(res.data)
      })
      .catch(err => console.log(err))
  }, [id])

  return (
    <div>
      {note ? <div>
        <h3>{note.isImportant ? '📌 ' : ''}{note.title}</h3>
        <p>{note.content}</p>
        <p>{note.createdAt}</p>
      </div> : <p>loading....</p>}
    </div>
  )
}

export default ShowOne