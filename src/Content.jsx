import React, { useState } from 'react'

import ItemsList from './ItemsList';
function Content({items,handleCheck,deleteVal}) {
    
   
  return (
    <main>
        {(items.length)?(
       <ItemsList items={items} handleCheck = {handleCheck} deleteVal={deleteVal}/>):(<p style={{color:"red"}}>Your List is Empty</p>)}
    </main>
  )
}

export default Content