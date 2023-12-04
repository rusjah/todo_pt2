import React from 'react'
import { useAppContext } from '../../contex/AppContext'

function DeleteBtn({id}) {
    const {deleteTodo} = useAppContext();
  return (
    <div> <button onClick={() => {deleteTodo(id)}} className="btn font-bold md:text-[1.2vw] text-[4vw] text-yellow-950  rounded-2 absolute top-5 right-5 bg-white border-amber-500">X</button></div>
    // <div> <button  className="btn font-bold md:text-[1.2vw] text-[4vw] text-yellow-950 w-2 h-2 rounded-full absolute top-5 right-5">X</button></div>
  )
}

export default DeleteBtn