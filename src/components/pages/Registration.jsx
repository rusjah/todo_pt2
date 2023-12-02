import React from 'react'
import { useAppContext } from '../../contex/AppContext'

function Registration() {
    const {registration} = useAppContext();

    function submitHandler(e) {
        e.preventDefault();
        const userData = {
            name: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        e.target.username.value = '';
        e.target.email.value = '';
        e.target.password.value = '';

        registration(userData);
    }
  return (
  
    <div className='flex justify-center items-center h-[88vh]'>
        <form action="" className='flex flex-col items-center gap-4 w-96' onSubmit={submitHandler}>
            <input type="username" placeholder="Username" name='username' className="input input-bordered input-warning w-full " required/>
            <input type="email" placeholder="Email" name='email' className="input input-bordered input-warning w-full " required/>
            <input type="password" placeholder="Password" name='password' className="input input-bordered input-warning w-full" required/>
            <button className="btn btn-accent w-[50%] bg-yellow-950 text-white">Sign Up</button>
        </form>
    </div>
  )
}

export default Registration