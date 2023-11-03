import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Main = (props) => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8001/api/movies')
      .then(res => {
        console.log(res.data)
        setMovies(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {
        movies.map((elem, i) => {
          return (
            <div key={i}>
              <Link to={"/movies/" + elem._id}><p>{elem.title}</p></Link>
              <img width="200px" src={elem.image} alt="Movie Poster" />
              <p>Released: {elem.releaseYear}</p>
              <p>Have you seen this? {elem.seen ? "yes" : "no"}</p>
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}

export default Main