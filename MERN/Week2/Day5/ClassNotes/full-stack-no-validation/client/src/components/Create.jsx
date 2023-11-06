import React, {useState} from 'react'
import axios from 'axios'

const Create = (props) => {

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [releaseYear, setReleaseYear] = useState(1900)
  const [seen, setSeen] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    axios.create('http://localhost:8001/api/movies')
  }

  return (
    <div>
      <p>{JSON.stringify(title)}</p>
      <p>{JSON.stringify(image)}</p>
      <p>{JSON.stringify(releaseYear)}</p>
      <p>{JSON.stringify(seen)}</p>
      <form>
        <label htmlFor="title">Title: </label>
        <input onChange={e => setTitle(e.target.value)} type="text" name="title" id="title" value={title} />
        <br />

        <label htmlFor="image">Image: </label>
        <input onChange={e => setImage(e.target.value)} type="text" name="image" id="image" value={image} />
        <br />

        <label htmlFor="releaseYear">Release Year: </label>
        <input onChange={e => setReleaseYear(e.target.value)} type="number" name="releaseYear" id="releaseYear" value={releaseYear} />
        <br />

        <label htmlFor="seen">Have you seen this? </label>
        <input onChange={e => setSeen(e.target.checked)} type="checkbox" name="seen" id="seen" checked={seen} />
        <br />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Create