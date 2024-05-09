import React, { useState } from 'react'
import './App.css'
function App(){

  const[display,setDisplay] =useState('0')
  const[expression,setExpression]=useState('');


      
  const handleInput=(value)=>{
    if(display === '0'){
      setDisplay(value)
    }else{
      setDisplay(display + value)
    }
    setExpression(expression + value)
  }

  const clear=()=>{
    setDisplay('0');
    setExpression('')
  }
  const calculate=()=>{
      try{
       const result= eval(expression);
       setDisplay(result)
       setExpression(result.toString());
      }catch(error){
        setDisplay('Error')
      }
  }
  return(
    <div className='cal'>
      <div className='display'>{display}</div>
      <div className='buttons'>
       
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('+')}>+</button>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('-')}>-</button>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('*')}>*</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button onClick={() => handleInput('.')}>.</button>
        <button onClick={ clear}>C</button>
        <button onClick={() => handleInput('/')}>/</button>
        <button onClick={ calculate}>=</button>
       
        
      </div>
    </div>
  )
} 
export default App