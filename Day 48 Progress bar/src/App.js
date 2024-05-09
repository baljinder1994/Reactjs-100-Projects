import React, { useState } from 'react'

const Progress=({progress})=>{
  const barStyle={
    width:`${progress}%`,
    height:'30px',
    backgroundColor:'blue',
    borderRadius:'15px',
  }
  return(
    <div style={{border:'1px solid black',width:'300px'}}>
      <div style={barStyle}></div>
    </div>
  )
}

const Upload=()=>{

 const[progress,setProgress]=useState(0)

 const uploadData=()=>{
   const totalData=100;
   const interval=setInterval(() =>{
    setProgress(prevProgress =>{
      if(prevProgress === 100){
        clearInterval(interval)
        return 100;
      }
      const newProgress= prevProgress+ 50
      return newProgress > 100 ? 100: newProgress

    })
   },1000)
 }

  return(
    <>
  <h2>Upload</h2>
  <button onClick={uploadData}>Strat</button>
  <Progress progress={progress}/>
  </>
  )
}
export default Upload