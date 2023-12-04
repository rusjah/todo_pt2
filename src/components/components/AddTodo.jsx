import React from 'react'
import { useAppContext } from '../../contex/AppContext'
import InputField from './InputField'


function AddTodo() {
    const {addTodo} = useAppContext()

    // function submitHandler(e) {
    //     e.preventDefault()
    //     const todo = {
    //         todo: e.target.todo.value,
    //         time: e.target.time.value ? String(e.target.time.value) : '',
    //         status: 'aktive',
    //         date_todo: e.target.date.value ? String(e.target.date.value) : '',
    //         type: e.target.type.value 
    //     }
    //     e.target.todo.value = ''
    //     addTodo(todo);
    // }
  return (
    <div>
        <div className="collapse bg-base-200">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title bg-yellow-100 text-black font-bold peer-checked:bg-orange-50 peer-checked:text-black">
               Add new ToDo to my task
            </div>
            <div className="collapse-content bg-yellow-100 text-black peer-checked:bg-orange-50 peer-checked:text-black"> 
               <InputField submitType={'add'} />
            </div>
        </div>

    </div>
  )
}

export default AddTodo