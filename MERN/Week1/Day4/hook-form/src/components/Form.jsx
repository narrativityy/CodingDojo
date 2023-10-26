import React, {useState} from 'react'

const Form = (props) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const createFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const createLastName = (e) => {
    setLastName(e.target.value)
  }

  const createEmail = (e) => {
    setEmail(e.target.value)
  }

  const createPassword = (e) => {
    setPassword(e.target.value)
  }

  const createConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  return (
    <div>
      <form>
        <p>First Name: <input type="text" onChange={(e) => createFirstName(e)} /></p>
        <p>Last Name: <input type="text" onChange={(e) => createLastName(e)} /></p>
        <p>Email: <input type="email" onChange={(e) => createEmail(e)} /></p>
        <p>Password: <input type="password" onChange={(e) => createPassword(e)} /></p>
        <p>Confirm Password: <input type="password" onChange={(e) => createConfirmPassword(e)} /></p>
      </form>
      <p>Your Form Data</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confirmPassword}</p>
    </div>
  )
}

export default Form