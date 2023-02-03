import React, { useState } from 'react'
import Products from './Products'
import Searchbox from './Searchbox'
import Toggle from './Toggle' 

const UI = () => {
    const [filterText, setFilterText] = useState('')
    const [showCheapestOnly, setShowCheapestOnly] = useState(true)
  return (
    <div className='flex w-full flex-col justify-center align-center'>
        <div className='h-20 mx-20 mt-10 flex flex-cols justify-between items-center'>
          <Searchbox value={filterText} event={e => setFilterText(e.target.value)} />
          <Toggle isChecked={showCheapestOnly} event={()=> setShowCheapestOnly(!showCheapestOnly)}/>
        </div>
        <Products filterText={filterText} showCheapestOnly={showCheapestOnly}/>
    </div>
  )
}

export default UI