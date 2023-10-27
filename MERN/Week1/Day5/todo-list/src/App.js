import './App.css';
import {useState} from 'react'
import Form from './components/Form';
import Display from './components/Display';

function App() {

  const [todoList, setTodoList] = useState([{value: 'test', checked: false}])

  const addTodo = (todo) => {
    setTodoList([...todoList, {value: todo, checked: false}])
  }

  const removeTodo = (index) => {
    setTodoList(todoList.filter((elem, i) => {
      return i !== Number(index)
    }))
  }

  const setCheck = (index) => {
    const copyTodoList = [...todoList]
    if (copyTodoList[index].checked === true)
      copyTodoList[index].checked = false
    else
      copyTodoList[index].checked = true
    setTodoList(copyTodoList)
  }

  return (
    <div className="App">
      <Form addTodo={addTodo}/>
      <Display todoList={todoList} removeTodo={removeTodo} setCheck={setCheck}/>
    </div>
  );
}

export default App;
