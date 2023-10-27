import React, {useState} from 'react'

const Form = (props) => {

  const [todo, setTodo] = useState('')
  const {addTodo} = props
  
  const createTodo = (e) => {
    e.preventDefault()
    addTodo(e.target[0].value)
    setTodo('')
  }

  return (
    <div style={{margin: '10px'}}>
      <form onSubmit={createTodo}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
        <br />
        <button>Add</button>
      </form>
    </div>
  )
}

export default Form