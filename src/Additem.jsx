import {React,useRef} from 'react'
import { FaPlus } from 'react-icons/fa'
const Additem = ({newItem,setItem,handleSubmit}) => {
  const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input ref={inputRef} type="text" autoFocus id="addItem" placeholder='Add Item' required value={newItem} onChange={(e)=>setItem(e.target.value)}/>
        <button onClick={()=>inputRef.current.focus()} type='submit' aria-label='Add Item'><FaPlus/></button>
    </form>
  )
}

export default Additem