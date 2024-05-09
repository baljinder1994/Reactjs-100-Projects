import React, { useState } from 'react'
import Hello from './Hello'
import Wlcome from './Wlcome'
function App(){
  const[currentPage,setCurrentPage]=useState(1);
  const componentPerPage=1;

  const totalPage=2;
  const handleClick=(pageNumber)=>{
   setCurrentPage(pageNumber)
  }
  const renderComponent=() =>{
    if(currentPage === 1){
      return <Hello/>
        
      
    }else if(currentPage == 2){
      return <Wlcome/>
    }
  }
  return(
    <div>
     {renderComponent()}
   {Array.from({length:totalPage},(_,index) => index + 1).map(page =>(
    <button onClick={() => handleClick(page)} key={page} className={currentPage == page ? 'active' : ''}>
      {page}
    </button>
  ))}
    </div>
  )
}
export default App