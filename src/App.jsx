import { useState } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Additem from './Additem'
import SearchItems from './SearchItems'

function App() {
  const [search,setSearch] = useState('')
  const [newItem,setNewitem] = useState('')
  const[items,setItems]=useState(JSON.parse(localStorage.getItem('todo_list')))

const addItem = (item)=>{
  const id = items.length ? items[items.length-1].id +1:1;
  const addNewItem = {id,checked:false,items:item}
  const listitems = [...items,addNewItem]
  setItems(listitems)
  localStorage.setItem("todo_list",JSON.stringify(listitems))
}

const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(newItem)
  addItem(newItem)
  setNewitem('')
  
}
const handleCheck = (id)=>{
  const listItems = items.map((item)=>item.id===id ? {...item,checked:!item.checked} : item)
  setItems(listItems)
  localStorage.setItem("todo_list",JSON.stringify(listItems))
}
const deleteVal = (id)=>{
  const newList = items.filter(item=> item.id!==id)
  setItems(newList)
  localStorage.setItem("todo_list",JSON.stringify(newList))
}
  return (
    <main>
      <div className='App'>
        <Header />
        <Additem newItem ={newItem} setItem = {setNewitem} handleSubmit = {handleSubmit}/>
        <SearchItems search = {search} setSearch={setSearch} />
        <Content items={items.filter(item => ((item.items).toLowerCase()).includes(search.toLowerCase()))} handleCheck = {handleCheck} deleteVal={deleteVal} />
        <Footer length = {items.length}/>
       </div>
       </main>
    
  )
}

export default App
