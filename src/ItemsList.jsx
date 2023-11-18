//prop Drilling

import React from 'react'

import Lineitems from './Lineitems';
const ItemsList = ({items,handleCheck,deleteVal}) => {
  return (
    <ul>
    {items.map(item=>(
       <Lineitems item={item} key = {item.id} handleCheck = {handleCheck} deleteVal={deleteVal}/> 
    ))}
    </ul>
  )
}

export default ItemsList