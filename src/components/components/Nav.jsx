import React from 'react'
import { useAppContext } from '../../contex/AppContext'

function Nav() {
    const {authorization} = useAppContext()
  return (
    <div className="navbar px-4 bg-orange-300 min-h-[7vh]">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl font-marhey fontt-bold text-[2em]">Todo</a>
            <p>{authorization}</p>
        </div>
       {authorization &&  <div className="flex-none">
                            <ul className="menu menu-horizontal px-1">
                            <li><a>My todos</a></li>
                            <li><a>Complated</a></li>
                            <li><a>Log out</a></li>
                            </ul>
                          </div>}
    </div>
  )
}

export default Nav