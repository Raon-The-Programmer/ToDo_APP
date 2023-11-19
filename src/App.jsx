import { useState,useEffect } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Additem from './Additem'
import SearchItems from './SearchItems'
import apiRequest from './apiRequest'

function App() {
  const API_URL = 'http://localhost:3000/Items'
  const [search,setSearch] = useState('')
  const [newItem,setNewitem] = useState('')
  const[items,setItems]=useState([])
  const [fetchError,setFetcherror] = useState(null)
  const [isLoading,Setisloading] = useState(true)
useEffect(()=>{
  const fetchItems = async()=>{
    try{
      const response = await fetch(API_URL)
      if(!response.ok) throw Error('Wrong url')
      const listitems = await response.json()
      setItems(listitems)
      setFetcherror(null)
    }
    catch(err){
      setFetcherror(err.message)
    }
    finally{
      Setisloading(false)
    }
  }
  setTimeout(()=>{(async()=> await fetchItems())()},2000)
  
},[])
const addItem = async(item)=>{
  const id = items.length ? items[items.length-1].id +1:1;
  const addNewItem = {id,checked:false,items:item}
  const listitems = [...items,addNewItem]
  setItems(listitems)
  const postOPtions = {
    method:'POST',
    header:{'content-type':'application/json'},
    body:JSON.stringify(addNewItem)
  }
  const result = await apiRequest(API_URL,postOPtions)
  if(result) setFetcherror(result)
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
 
}
const deleteVal = (id)=>{
  const newList = items.filter(item=> item.id!==id)
  setItems(newList)
  
}
  return (
    <main>
      <div className='App'>
        <Header />
        <Additem newItem ={newItem} setItem = {setNewitem} handleSubmit = {handleSubmit}/>
        <SearchItems search = {search} setSearch={setSearch} />
        <main> {isLoading && <p>Loading...</p>}{fetchError && <p>Error: {fetchError}</p>}{!isLoading && !fetchError && <Content items={items.filter(item => ((item.items).toLowerCase()).includes(search.toLowerCase()))} handleCheck = {handleCheck} deleteVal={deleteVal} />}</main>
        <Footer length = {items.length}/>
       </div>
       </main>
    
  )
}

export default App
