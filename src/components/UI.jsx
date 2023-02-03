import React, { useState } from 'react'
import Products from './Products'
import Searchbox from './Searchbox'
import Toggle from './Toggle' 

const UI = () => {
    const [filterText, setFilterText] = useState('')
    const [showCheapestOnly, setShowCheapestOnly] = useState(true)
  return (
    <div className='w-full'>
        <div className='flex lg:w-2/4 flex-col justify-center align-center mx-auto'>
          <div className='h-20 mx-5 mt-10 flex flex-cols justify-between items-center'>
            <Searchbox value={filterText} event={e => setFilterText(e.target.value)} />
            <Toggle isChecked={showCheapestOnly} event={()=> setShowCheapestOnly(!showCheapestOnly)}/>
          </div>
          <Products filterText={filterText} showCheapestOnly={showCheapestOnly}/>
      </div>
    </div>

  )
}

export default UI