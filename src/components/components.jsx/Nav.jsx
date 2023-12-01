import React from 'react'
import { useAppContext } from '../../contex/AppContext'

function Nav() {
    const {authorization} = useAppContext()
  return (
    <div className="navbar bg-base-100 px-4">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">Todo</a>
            <p>{authorization}</p>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><a>My todos</a></li>
            <li><a>Log out</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav