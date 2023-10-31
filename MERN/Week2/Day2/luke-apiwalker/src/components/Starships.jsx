import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const People = () => {

  const navigate = useNavigate()

  const {id} = useParams()

  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/${id}`)
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
      <p>Cargo Capacity: {data.cargo_capacity}</p>
      <p>Crew: {data.crew}</p>
      <p>Cost: {data.cost_in_credits} credits</p>
    </div> : <p>loading</p>
  )
}

export default People