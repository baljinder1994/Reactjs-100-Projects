import React, { useState } from 'react'
import './App.css'
function App(){
   

  const[items,setItems]=useState([
    {id:1, text:'Item 1'},
    {id:2, text:'Item 2'},
    {id:3, text:'Item 3'},
    {id:4, text:'Item 4'},
  ])
   
  const[draggedItem,setDraggedItem]=useState(null)

  const handleStart=(e,index)=>{
    setDraggedItem(items[index] );
    e.dataTransfer.setData('index',index)
  }
  const handleDrop =(e,dropIndex)=>{
    const dragIndex=e.dataTransfer.getData('index')
    const updateItems= [...items]

    updateItems.splice(dragIndex,1);
    updateItems.splice(dropIndex,0,draggedItem)
    
    setItems(updateItems);
    setDraggedItem(null)
  }
  const handleOver =(e) =>{
    e.preventDefault();
  }



  
 return(
  <div className='container'>
    <h1>Drag & Drop</h1>
    <ul className='list'>
      {items.map((item,index) =>(
      <li 
      key={item.id}
      className='item'
      draggable="true"
      onDragStart={(e) => handleStart(e,index)}
      onDragOver={handleOver}
      onDrop={(e) => handleDrop(e,index)}
      >
     {item.text}
      </li>
      ))}
    </ul>
  </div>
 )
}
export default App