import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Planets = () => {

  const navigate = useNavigate()

  const {id} = useParams()

  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
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
      <p>Climate: {data.climate}</p>
      <p>Gravity: {data.gravity}</p>
      <p>Terrain: {data.terrain}</p>
    </div> : <p>loading</p>
  )
}

export default Planets