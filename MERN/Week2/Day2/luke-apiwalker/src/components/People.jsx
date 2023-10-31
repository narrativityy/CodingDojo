import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const People = () => {

  const navigate = useNavigate()

  const {id} = useParams()

  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
        navigate('/error')
      })
  }, [id, navigate])

  return (
    data ?
    <div>
      <p>Name: {data.name}</p>
      <p>Eye Color: {data.eye_color}</p>
      <p>Birth Year: {data.birth_year}</p>
      <p>Hair Color: {data.hair_color}</p>
    </div> : <p>loading</p>
  )
}

export default People