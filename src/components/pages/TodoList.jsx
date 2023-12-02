import React from 'react'
import AddTodo from '../components/AddTodo'

function TodoList() {
  return (
    <div className='flex flex-col justify-center items-center gap-4 py-4'>
         <AddTodo />
         
    </div>
  )
}

export default TodoList