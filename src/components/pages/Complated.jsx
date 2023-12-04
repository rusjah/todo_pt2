import React from 'react'
import { useAppContext } from '../../contex/AppContext'
import Todo from '../components/Todo';

function Complated() {
   const { displayTodo, removeAll} = useAppContext();
   const todosList = displayTodo('done')
  return (
    <div className=' lg:px-[16vw] md:px-[30vw] pt-[10vh] relative'>
        <button onClick={removeAll} className="btn btn-accent w-16 bg-yellow-950 text-white absolute top-4 right-4">Clear</button>
        <div className='flex justify-between gap-6 flex-wrap'>
            <h1 className='font-bold text-center w-full text-[2em] text-yellow-900'>Complated Tasks</h1>
            {todosList.length > 0 && todosList.map(el => <Todo key={el.id} oneTodo={el} />)}
        </div>
    </div>
  )
}

export default Complated