import React from 'react'
import DeleteBtn from './DeleteBtn'
import CheckBtn from './CheckBtn'
import { useAppContext } from '../../contex/AppContext'


function Todo({oneTodo}) {
  const {updateTodo} = useAppContext();

  return (
    <div className="card w-full  shadow-xl border-2 border-orange-300">
        
        <div className="card-body realtiv">
            <h2 className="card-title">{oneTodo.todo}</h2>
            <p className='text-[10px] font-bold text-amber-950'>{oneTodo.date_todo}{oneTodo.time}</p>
            {/* <p className='pt-4 text-red-950'>todo.time</p> */}
           <DeleteBtn id={oneTodo.objectId} />
        </div>
    </div>
  )
}

export default Todo