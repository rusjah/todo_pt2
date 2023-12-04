import React from 'react'
import { useAppContext } from '../../contex/AppContext'

function InputField({submitType, el}) {
    const {updateTodo, onChangeHandler, addTodo} = useAppContext();

    function submitHandler(e) {
      e.preventDefault()
      if(submitType === 'add') {
        const todo = {
          todo: e.target.todo.value,
          time: e.target.time.value ? String(e.target.time.value) : '',
          status: 'aktive',
          date_todo: e.target.date.value ? String(e.target.date.value) : '',
          type: e.target.type.value 
        }
        e.target.todo.value = ''
        addTodo(todo);
      } else {
        const todoNew = {
          objectId: el.objectId,
          editStatus:  !el.editStatus,
          todo: e.target.todo.value,
          time: e.target.time.value ? String(e.target.time.value) : el.time,
          date_todo: e.target.date.value ? String(e.target.date.value) : el.date_todo,
          type: e.target.type.value,
          todo: e.target.todo.value
        }
        // e.target.todo.value = ''
        updateTodo(todoNew)
      }
  }

  return (
    <form action="" className='flex flex-col items-center  gap-4 lg:w-96' onSubmit={submitHandler} >
        <input type="date" name="date" id="date" className='absolute left-5 h-12 w-5'/>
        <input type="time" name="time" id="time" className='absolute left-12 h-12 w-8' />
        <input type="text" placeholder="Todo" name='todo' className="input input-bordered input-warning w-full h-12 pl-[20vw] lg:pl-[6vw]" defaultValue={submitType === 'edit' ? el.todo : ''} required/>
        <select className="select select-warning w-full max-w-8" name='type'>
            <option disabled selected value={'doFirst'}>Type</option>
            <option value={'doFirst'}>Urgant and Import</option>
            <option value={'delegate'}>Not urgent but import</option>
            <option value={'eliminate'}>Urgent but not importent</option>
            <option value={'doLater'}>Neither Urgen or importent</option>
        </select>
        <button className="btn btn-accent w-[50%] bg-yellow-950 text-white">{submitType}</button>
    </form>
  )
}
//  onChange={onChangeHandler}

export default InputField