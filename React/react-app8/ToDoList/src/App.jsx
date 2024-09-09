import React, { useState } from 'react'
import NavBar from './component/NavBar'
import './App.css'

const App = () => {
  const [todo,setTodo]=useState('')
  const [todos,setTodos]=useState([])

  const handleEdit=()=>{

  }
  const handleDelete=()=>{

  }
  const handleAdd=()=>{
    setTodos([...todo,{isCompleted:false}])
    setTodo("")

  }
  const handleChange=(e)=>{
    setTodo(e.target.value)

  }
  return (
    <>
    <NavBar/>
    <div className="container">
      <div className="addTodo">
        <h2>Add a Todo</h2>
        <input onChange={handleChange} value={todo} type="text" name="" id="input" />
        <button onClick={handleAdd} className='btn'>Add</button>
      </div>
      <h2>Your Todo</h2>
      <div className="todos">
        {todos.map(item=>{
          return <div className="todo">
          <div className="todotext" >{item.todo}</div>
          <div className="button">
            <button onClick={handleEdit} className='btn'>Edit</button>
            <button onClick={handleDelete} className='btn'>Delete</button>
          </div>
        </div>
                })}

      </div>

    </div>
    </>
  )
}

export default App
