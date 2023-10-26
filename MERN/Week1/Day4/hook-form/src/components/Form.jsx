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

  const validateFirstName = () => {
    firstName.length < 2 && <p>First Name must be at least 2 characters</p>
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
        { firstName.length < 2 ? <p>First Name must be at least 2 characters</p> : '' }
        <p>Last Name: <input type="text" onChange={(e) => createLastName(e)} /></p>
        { lastName.length < 2 ? <p>Last Name must be at least 2 characters</p> : '' }
        <p>Email: <input type="email" onChange={(e) => createEmail(e)} /></p>
        { email.length < 5 ? <p>Email must be at least 5 characters</p> : '' }
        <p>Password: <input type="password" onChange={(e) => createPassword(e)} /></p>
        <p>Confirm Password: <input type="password" onChange={(e) => createConfirmPassword(e)} /></p>
        { confirmPassword.length < 8 || password.length < 8 ? <p>Passwords must be at least 8 characters</p> : '' }
        { password !== confirmPassword ? <p>Passwords must match</p> : '' }
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