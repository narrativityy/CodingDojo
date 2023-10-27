import React from 'react'

const Display = (props) => {

  const {todoList, removeTodo, setCheck} = props

  const deleteHandler = (e) => {
    e.preventDefault()

    const index = e.target[0].value
    removeTodo(index)
  }

  const changeTodoStatus = (e) => {
    setCheck(e.target.value)
  }

  return (
    <div>
      {todoList.map((elem, i) => {
        return (
        <div key={i}>
          <form onSubmit={deleteHandler}>
            <input type="hidden" value={i}/>
            <li key={i}>{elem.value} <input type="checkbox" checked={elem.checked} value={i} onChange={changeTodoStatus}/> <button>Delete</button></li>
          </form>
        </div>
        )
      })}
    </div>
  )
}

export default Display