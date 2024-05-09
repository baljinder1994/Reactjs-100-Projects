import React, { useState } from 'react'
import './App.css'
function App(){
    const[expenses,setExpenses]=useState([])
    const[income,setIncome]=useState([])
    const[des,setDes]=useState('')
    const[amount,setAmount]=useState('')
    const[totalIncome,setTotalIncome]=useState(0)
    const[totalEx,setTotalEx]=useState(0)
    const[totalBal,setTotalBal]=useState(0)

    const handleEx=()=>{
           if(des && amount){
            const newExpense={
              id:expenses.length + 1,
              description:des,
              amount:parseFloat(amount)
            }
            setExpenses([...expenses,newExpense])
            setTotalEx(totalEx + parseFloat(amount))
            setTotalBal(totalBal - parseFloat(amount))
            setDes();
            setAmount('')
           }
    }
    const handleIn=()=>{
      if(des && amount){
        const newIncome={
          id:income.length + 1,
          description:des,
          amount:parseFloat(amount)
        }
        setIncome([...income,newIncome])
        setTotalIncome(totalIncome + parseFloat(amount))
        setTotalBal(totalBal + parseFloat(amount))
        setDes('');
        setAmount('')
      }
    }





 return(
  <div className='App'>
    <h1>Budget Tracker</h1>
    <div className='container'>
      <div className='form'>
        <input type="text" value={des}
        onChange={(e) =>setDes(e.target.value)}
        ></input>
        <input type="text" value={amount}
        onChange={(e) =>setAmount(e.target.value)}
        ></input>
        <button onClick={handleEx}>Add Expense</button>
        <button onClick={handleIn}>Add Income</button>
      </div>
      <div className='summery'>
        <div className='total'>
          <h2>Total Income</h2>
          <h3>${totalIncome}</h3>
        </div>
        <div className='total'>
          <h2>Total Expense</h2>
          <h3>${totalEx.toFixed(2)}</h3>
        </div>
        <div className='total'>
          <h2>Total Balance</h2>
          <h3>${totalBal}</h3>
        </div>
      </div>
      <div className='expenses'>
        <h2>Expenses</h2>
        <ul>
          {expenses.map((expense)=>(
            
          
          <li key={expense.id}>
            <span>{expense.description}</span>
            <span>${expense.amount.toFixed(2)}</span>
            
            
            
            </li>
        ))}
        </ul>
      </div>
    </div>
  </div>
 )
}
export default App;