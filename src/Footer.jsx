import React from 'react'

function Footer({length}) {
    const year = new Date();
  return (
    <footer>There {length>1?"are":"is"} {length} {length>1?"items":"item"}</footer>
  )
}

export default Footer