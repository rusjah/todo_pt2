import React from 'react'
import { Link } from 'react-router-dom'

function Wlelocom() {
  return (
    <div className='flex flex-col justify-center items-center gap-4 font-dancing mask mask-pentagon w-[70vw] h-[70vh] bg-yellow-50 relative pt-4 lg:pt-0'>
        <h1 className='font-bold lg:text-[3em] '>Welcom to your our ToDo page</h1>
        <p className='lg:text-[2em] font-marhey'>Please, login first</p>
        <Link to={'/login'} className='lg:absolute lg:bottom-[10%]'><button className="btn btn-outline btn-success font-marhey lg:text-[2em]">Login</button></Link>
    </div>
  )
}

export default Wlelocom