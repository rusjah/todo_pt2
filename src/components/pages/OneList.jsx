import React from 'react'
import { useAppContext } from '../../contex/AppContext'

function OneList() {
    const {typeList} = useAppContext()
  return (
    <div>
        {typeList}
    </div>
  )
}

export default OneList