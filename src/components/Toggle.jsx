import React from 'react'

const Toggle = ({event, isChecked}) => {
  return (
    <div>
<div class="flex items-center">
    <input checked={isChecked} defaultChecked={true} onChange={event} id="checkbox" type="checkbox" class="w-7 h-7"/>
    <label for="checked-checkbox" className='pl-3'>Show five cheapest only</label>
</div>
    </div>
  )
}

export default Toggle