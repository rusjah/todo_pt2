import React from 'react'
import { useAppContext } from '../../contex/AppContext'


function AddTodo() {
    const {addTodo} = useAppContext()

    function submitHandler(e) {
        e.preventDefault()
        const todo = {
            todo: e.target.todo.value,
            time: e.target.time.value ? String(e.target.time.value) : '',
            status: 'aktive',
            date_todo: e.target.date.value ? String(e.target.date.value) : '',
            type: e.target.type.value 
        }
        e.target.todo.value = ''
        addTodo(todo);
    }
  return (
    <div>
        <div className="collapse bg-base-200">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title bg-yellow-100 text-black font-bold peer-checked:bg-orange-50 peer-checked:text-black">
               Add new ToDo to my task
            </div>
            <div className="collapse-content bg-yellow-100 text-black peer-checked:bg-orange-50 peer-checked:text-black"> 
                <form action="" className='flex flex-col items-center  gap-4 lg:w-96' onSubmit={submitHandler}>
                    <input type="date" name="date" id="date" className='absolute left-5 h-12 w-5'/>
                    <input type="time" name="time" id="time" className='absolute left-12 h-12 w-8' />
                    <input type="text" placeholder="Todo" name='todo' className="input input-bordered input-warning w-full h-12 pl-[20vw] lg:pl-[6vw]" required/>
                    <select className="select select-warning w-full max-w-8" name='type'>
                        <option disabled selected value={'doFirst'}>Type</option>
                        <option value={'doFirst'}>Urgant and Import</option>
                        <option value={'delegate'}>Not urgent but import</option>
                        <option value={'delegate'}>Neither Urgen or importent</option>
                        <option value={'doLater'}>Urgent but not importent</option>
                    </select>
                    <button className="btn btn-accent w-[50%] bg-yellow-950 text-white">Add</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default AddTodo