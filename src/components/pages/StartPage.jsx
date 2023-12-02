import React from 'react'
import { useAppContext } from '../../contex/AppContext'
import Wlelocom from '../components/Wlelocom';

function StartPage() {
  const { authorization } =useAppContext();
  return (
    <div className='h-[88vh] flex flex-col justify-center items-center bg-gradient-to-r from-orange-300 via-blue-100 to-pink-100'>
      {!authorization && <div>
            <Wlelocom />
          </div>}
    </div>
  )
}

export default StartPage