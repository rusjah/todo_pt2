import React from 'react'
import DeleteBtn from './DeleteBtn'
import { useAppContext } from '../../contex/AppContext'
import InputField from './InputField';
import StatusTodo from './StatusTodo';


function Todo({oneTodo}) {
  const {changeEditStatus, onChangeHandler} = useAppContext();

  return (
    <div className="card w-full  shadow-xl border-2 border-orange-300">

        <div className="card-body realtiv">

          { !oneTodo.editStatus ? <>
            <h2  onClick={() => {changeEditStatus(oneTodo.objectId, oneTodo.editStatus)}} className="card-title">{oneTodo.todo}</h2> 
            <p className='text-[10px] font-bold text-amber-950'>{oneTodo.date_todo} {oneTodo.time}</p>
            </> : <>
            { oneTodo.editStatus && <div className='flex flex-col items-center gap-4'> 
                <InputField submitType={'edit'} el={oneTodo}/>
              </div>
            }
            </>}
            {!oneTodo.editStatus && <>
              <DeleteBtn id={oneTodo.objectId} />
              <StatusTodo id={oneTodo.objectId}/>
            </>}
        </div>
    </div>
  )
}

export default Todo