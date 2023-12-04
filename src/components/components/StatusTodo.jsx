import React from 'react'
import { useAppContext } from '../../contex/AppContext';

function StatusTodo({id}) {
    const {changeTaskStatus} = useAppContext()
    function onChangeHundler(e) {
        if (e.target.checked) {
            changeTaskStatus(id, 'done')
        } else {
            changeTaskStatus(id, 'aktive')
        }
        // e.target.checked = false
    }
  return (
    <div className="form-control">
        <label className="cursor-pointer label absolute top-3 right-16">
            <input type="checkbox" onChange={onChangeHundler}  className="checkbox checkbox-warning w-11 h-12" />
        </label>
    </div>
  )
}

export default StatusTodo