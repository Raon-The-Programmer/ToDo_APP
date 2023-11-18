import React from 'react'

const SearchItems = ({search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input type="text" role="searchbox" id="search" placeholder='Search Items' value={search} onChange={(e)=>setSearch(e.target.value)}/>

    </form>
  )
}

export default SearchItems