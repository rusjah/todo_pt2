import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../contex/AppContext'

function Login() {
  const {loginUser} = useAppContext();
  function submitHandler(e) {
    e.preventDefault();
    const userData = {
        email: e.target.email.value,
        password: e.target.password.value
    }
    e.target.email.value = '';
    e.target.password.value = '';
    loginUser(userData);
  }
  return (
    <div className='flex justify-center items-center h-[88vh]'>
        <form action="" className='flex flex-col items-center gap-4 w-96' onSubmit={submitHandler}>
            <input type="email" placeholder="Email" name='email' className="input input-bordered input-warning w-full " required/>
            <input type="password" placeholder="Password" name='password' className="input input-bordered input-warning w-full" required/>
            <Link to={'/registration'} className='self-end'><button className="btn btn-link text-yellow-950">+ Create New Account</button></Link>
            <button className="btn btn-accent w-[50%] bg-yellow-950 text-white">Log in</button>
        </form>
    </div>
  )
}

export default Login