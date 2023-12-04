import React from 'react'
import { useAppContext } from '../../contex/AppContext'
import { Link } from 'react-router-dom'

function Nav() {
    const {authorization, logoutUser} = useAppContext()
  return (
    <div className="navbar px-4 bg-orange-300 min-h-[7vh]">
        <div className="flex-1 flex items-center">
            <Link to={authorization ? '/todoList': '/'}><a className="btn btn-ghost text-xl font-marhey fontt-bold text-[2em]">Todo</a> </Link>
           
            <p>{authorization}</p>
        </div>
       {authorization &&  <div className="flex-none">
                            <ul className="menu menu-horizontal px-1">
                            <Link to={'/todoList'}> <li><a>My todos</a></li></Link>
                            <Link to={'/complated'}><li><a>Complated</a></li></Link>
                            <Link to={'/'} onClick={logoutUser}><li><a>Log out</a></li></Link>
                            </ul>
                          </div>}
    </div>
  )
}

export default Nav