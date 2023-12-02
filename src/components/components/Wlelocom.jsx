import React from 'react'
import { Link } from 'react-router-dom'

function Wlelocom() {
  return (
    <div className='flex flex-col justify-center items-center gap-4 font-dancing mask mask-pentagon w-[70vw] h-[70vh] bg-yellow-50 relative'>
        <h1 className='font-bold text-[3em] '>Welcom to your our ToDo page</h1>
        <p className='text-[2em]'>Please, login first</p>
        <Link to={'/login'} className='absolute bottom-[10%]'><button className="btn btn-outline btn-success font-">Login</button></Link>
    </div>
  )
}

export default Wlelocom