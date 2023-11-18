import React from 'react'
import { FaTrash } from "react-icons/fa";
const Lineitems = ({item,handleCheck,deleteVal}) => {
  return (
    <li className='item' key={item.id}>
    <input type="checkbox" onChange={()=>handleCheck(item.id)} checked={item.checked}/>
    <label style={(item.checked)? {textDecoration: 'line-through'}:null} onDoubleClick={()=>handleCheck(item.id)}>{item.items}</label>
    <FaTrash role='button' tabIndex='0' aria-label={`Delete ${item.items}`} onClick={()=>deleteVal(item.id)}/>
</li>
  )
}

export default Lineitems