import React, { useState } from 'react'

const Mouse=()=>{
  const[message,setMessage]=useState('')
const handleClick=()=>{
setMessage('Clicked!')
}
const handleContext=()=>{
  setMessage('Right Clicked!')
}
const handleDouble=()=>{
  setMessage('Double Clicked!')
}

const handleDown=()=>{
  setMessage('Mouse Down!')
}
const handleEnter=()=>{
  setMessage('Mouse Enter!')
}
const handleLeave=()=>{
  setMessage('Mouse Leave!')
}
const handleMove=()=>{
  setMessage('Mouse Move!')
}
const handleOut=()=>{
  setMessage('Mouse Out!')
}
const handleOver=()=>{
  setMessage('Mouse Over!')
}
const handleUp=()=>{
  setMessage('Mouse Up!')
}
  return(
    <div>
      <div
       onClick={handleClick}
       onContextMenu={handleContext}
       onDoubleClick={handleDouble}
       onMouseDown={handleDown}
       onMouseEnter={handleEnter}
       onMouseLeave={handleLeave}
       onMouseMove={handleMove}
       onMouseOut={handleOut}
       onMouseOver={handleOver}
       onMouseUp={handleUp}







       style={{
        width:'200px',
        height:'200px',
        backgroundColor:'red'
       }}
      >

      </div>
      <h1>{message}</h1>
    </div>
  )

}
export default Mouse;