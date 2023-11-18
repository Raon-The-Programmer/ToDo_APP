import React from 'react'
import { FaPlus } from 'react-icons/fa'
const Additem = ({newItem,setItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input type="text" autoFocus id="addItem" placeholder='Add Item' required value={newItem} onChange={(e)=>setItem(e.target.value)}/>
        <button onClick={handleSubmit} type='submit' aria-label='Add Item'><FaPlus/></button>
    </form>
  )
}

export default Additem