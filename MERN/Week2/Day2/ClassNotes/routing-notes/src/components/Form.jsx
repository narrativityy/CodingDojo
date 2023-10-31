import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {

  const navigate = useNavigate()

  const [heroNum, setHeroNum] = useState(1)

  const submitHandler = (e) => {
    e.preventDefault()
    navigate(`/hero/${heroNum}`)
  }

  return (
    <fieldset>
      <legend>Form.jsx</legend>
      {JSON.stringify(heroNum)}

      <form onSubmit={submitHandler}>
        <input type="number" value={heroNum} onChange={e => setHeroNum(e.target.value)} />
        <button>Submit</button>
      </form>
    </fieldset>
  )
}

export default Form