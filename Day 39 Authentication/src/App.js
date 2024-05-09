import React, { useState } from 'react'
function App(){
  const[loggedIn,setLoggedIn]=useState(false)
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('');
  const[error,setError]=useState('');

  const handleLogin=()=>{
    if(username === 'user' && password === 'pass'){
      setLoggedIn(true)
      setError('');

    }else{
      setError('Invalid username or password');
    }
  }
  const handleLogout=()=>{
    setLoggedIn(false)
    setUsername('');
    setPassword('')
  }


  return(
    <div>
      {loggedIn ?(
    <div className='hide'>
      
      <h1>Welcome,{username}</h1>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <p>This is only auth: content</p>
      </div>
    </div>
      ):(
    <div className='show'>
      <h1>Login</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={handleLogin}>Login</button>
    </div>
      )}
  </div>
  )
}
export default App