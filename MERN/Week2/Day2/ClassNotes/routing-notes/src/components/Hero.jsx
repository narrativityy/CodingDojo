import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Hero = (props) => {

  const navigate = useNavigate()

  const [hero, setHero] = useState(null)

  const {heroId} = useParams()

  useEffect(() => {
    axios.get(`https://akabab.github.io/superhero-api/api/id/${heroId}.json`)
      .then(res => {
        setHero(res.data)
      })
      .catch(err => {
        console.log(err)
        navigate('/error')
      })
  }, [heroId, navigate])

  return (
    <fieldset>
      <legend>Hero.jsx</legend>
      {/* {JSON.stringify(hero)} */}
      {
        hero ? (
          <div>
            <h2>{hero.name}</h2>
            <img src={hero.images.sm} alt={hero.name} />
          </div> 
          ) : <h2>Loading....</h2>
      }
    </fieldset>
  )
}

export default Hero