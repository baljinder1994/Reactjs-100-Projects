
import React, { useEffect, useState } from 'react'

function App(){
    const[count,setCount]=useState(()=>{
      return parseInt(window.localStorage.getItem('count') || 0)
    })
    useEffect(() =>{
      window.localStorage.setItem('count',count)
    },[count])

    const increment=()=>{
      setCount(count+1)
    }

  return(
    <>
  <h1>Count:{count}</h1>
  <button onClick={increment}>Click</button>
  </>
  )
}
export default App