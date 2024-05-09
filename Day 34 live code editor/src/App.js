import React, { useState } from 'react'
import './App.css'
function App(){

 const[html,setHtml] =useState('<div>Hello</div>')
 const[css,setCss] =useState('div {color:blue;}')
 const[js,setJs] =useState('')

 const handleHTML=(event)=>{
  setHtml(event.target.value)
 }
 const handleCSS=(event)=>{
  setCss(event.target.value)
 }
 const handleJS=(event)=>{
  setJs(event.target.value)
 }

 const generate=()=>{
  return`
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
      ${html}
      <script>${js}</script>
      </body>
    </html>
  `
 }
     
 return(
  <div className='live-code-editor'>
    <div className='editor-container'>
      <div className='editor'>
        <h3>HTML</h3>
        <textarea value={html} onChange={handleHTML} rows={5}></textarea>
      </div>
      <div className='editor'>
        <h3>CSS</h3>
        <textarea value={css} onChange={handleCSS} rows={5}></textarea>
     
      </div>
      <div className='editor'>
        <h3>javascript</h3>
        <textarea value={js} onChange={handleJS} rows={5}></textarea>
     
      </div>
    </div>
    <div className='preview'>
      <h2>Preview:</h2>
      <iframe
      srcDoc={generate()}
      title="Preview"
        height="300"
        width="100%"
        sandbox="allow-scripts"
      ></iframe>
    </div>
  </div>
 )
}
export default App;