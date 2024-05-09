import React, { useState } from 'react'
import './App.css'
function App(){

  const[mode,setMode]=useState('light')
const handleClick=()=>{
  setMode(mode === 'light' ? 'dark' : 'light')
}

 return(
  <>
  <div className={`toggle ${mode}`}>
  <button onClick={handleClick}>
    {mode === 'light' ? 'Dark' : 'Light'}
  </button>
  <h1>Hello World</h1>
  </div>
  </>
 )
}
export default App