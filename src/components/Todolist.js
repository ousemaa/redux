import React from 'react'
import { useSelector } from 'react-redux'
import Todoitem from './Todoitem';
import AddTodo from './AddTodo';


const Todolist = () => {
    const todos = useSelector((state) => state.todo.todolist);
    console.log(todos)
  return (
    <div className='todolist'>
        <AddTodo/>
    {todos.map((todo)=>(<Todoitem todo={todo}/>
    ))}
    </div>
  )
}

export default Todolist