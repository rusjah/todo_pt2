import React from 'react'

function TodoForm() {
  return (
    <div>
         <form action="" className='flex flex-col items-center gap-4 w-96'>
            <input type="text" placeholder="Todo" name='todo' className="input input-bordered input-warning w-full " required/>
            <button className="btn btn-accent w-[50%] bg-yellow-950 text-white">Add</button>
        </form>
    </div>
  )
}

export default TodoForm