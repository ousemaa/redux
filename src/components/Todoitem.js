import React from 'react'
import { useDispatch } from 'react-redux'
import { doneTask, removeTask } from '../redux/todoSlice/TodoSlice'

const Todoitem = ({todo}) => {
    const dispatch = useDispatch ()
  return (
    <div className={`todoitems ${todo.isDone ? "Done": "undone" } `} >
    <div className='text'>
    <h2>{todo.title}</h2>
    <p>{todo.description}</p>
    </div>
    <span onClick={()=> dispatch  (doneTask({id:todo.id}))}>{todo.isDone?"Done":"Not Done"}</span>
    <button onClick={()=> dispatch  (removeTask({id:todo.id}))}>remove</button>
    </div>
  )
}

export default Todoitem