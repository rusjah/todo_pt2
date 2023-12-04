import React from 'react'
import AddTodo from '../components/AddTodo'
import CardTodo from '../components/CardTodo'
import { useAppContext } from '../../contex/AppContext'

function TodoList() {
 
  const {getList} = useAppContext()

  return (
    <div className='flex flex-col justify-center items-center gap-4 py-4'>
         <AddTodo />
        <div className='grid grid-rows-4 lg:grid-rows-2 grid-flow-col gap-16 pt-40'>
         <CardTodo myStyle={"bg-lime-500"} content={'Urgent and important'} type={'doFirst'}/>
         <CardTodo myStyle={"bg-orange-500"} content={'Not urgent but important'} type={'delegate'}/>
         <CardTodo myStyle={"bg-blue-500"} content={'Urgent but not important'} type={'eliminate'}/>
         <CardTodo myStyle={"bg-red-500"} content={'Neither urgent or important'} type={'doLater'}/>
        </div>
    </div>
  )
}

export default TodoList