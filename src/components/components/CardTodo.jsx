import React from 'react'
import { useAppContext } from '../../contex/AppContext'
import { useNavigate } from 'react-router-dom'


function CardTodo({myStyle, content, type}) {
    const {typeOfList, displayTodo} = useAppContext()

    // `/${typeList}`
  return (
    <div >
        <div className={`${myStyle} card w-96 bg-base-100 shadow-xl`}>
          <div className="card-body">
              <h2 className="card-title">{content}</h2>
              <div className="card-actions justify-end">
              <p className='font-bold'> {displayTodo(type).length}</p>
              <button onClick={() => {typeOfList(type)}} className="btn bg-yellow-950 text-white">Check List</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default CardTodo