import React from 'react'
import TodoForm from './TodoForm'

function AddTodo() {
  return (
    <div>

        <div className="collapse bg-base-200">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title bg-yellow-100 text-black font-bold peer-checked:bg-orange-50 peer-checked:text-black">
               Add new ToDo to my task
            </div>
            <div className="collapse-content bg-yellow-100 text-black peer-checked:bg-orange-50 peer-checked:text-black"> 
                <form action="" className='flex flex-col items-center  gap-4 w-96'>
                    <input type="date" name="date" id="date" className='absolute left-5 h-12 w-5'/>
                    <input type="time" name="time" id="time" className='absolute left-12 h-12 w-8' />
                    <input type="text" placeholder="Todo" name='todo' className="input input-bordered input-warning w-full h-12 pl-[6vw]" required/>
                    <select className="select select-warning w-full max-w-8">
                        <option disabled selected>Type</option>
                        <option>Today</option>
                        <option>Tomorrow</option>
                        <option>Week</option>
                        <option>Future</option>
                    </select>
                    <button className="btn btn-accent w-[50%] bg-yellow-950 text-white">Add</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default AddTodo