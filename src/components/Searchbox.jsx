import React from 'react'

const Searchbox = ({value, event}) => {
  return (
    <div>
        <div className='flex flex-row justify-between relative mb-2'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
            <svg aria-hidden="true" class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input value={value} onChange={event} className='w-25 p-2 pl-10 outline-none text-lg text-red-900 border-4 border-black rounded-xl' type="text" placeholder='Search Item'/>
        </div>
    </div>
  )
}

export default Searchbox