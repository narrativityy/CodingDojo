import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const OneMovie = () => {

  const {id} = useParams()

  const [movie, setMovie] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:8001/api/movies/${id}`)
      .then(res => {
        console.log(res.data)
        setMovie(res.data)
      })
      .catch(err => console.log(err))
  }, [id])

  return (
    <div>
      {movie ? (
        <div>
          <p>{movie.title}</p>
          <img width="200px" src={movie.image} alt="Movie Poster" />
          <p>Released: {movie.releaseYear}</p>
          <p>Have you seen this? {movie.seen ? "yes" : "no"}</p>
        </div>
      ) : <p>loading...</p>}

    </div>
  )
}

export default OneMovie