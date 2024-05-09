
import React, { useState } from 'react'
import html2canvas  from 'html2canvas'
function App(){
  const[screenshot,setScreenshot]=useState(null);
  const[capturing,setCapturing]=useState(false);

  const handleCapture=()=>{
    setCapturing(true);
    const captureTarget=document.getElementById('capture-target');
    html2canvas(captureTarget).then(canvas =>{
      const image= canvas.toDataURL();
      setScreenshot(image);
      setCapturing(false);

      const link=document.createElement('a');
      link.href=image;
      link.download='screenshot.png';
      document.body.appendChild(link)
      link.click()

      document.body.removeChild(link)
    })
  }
  return(
    <div>
      <h2>Screen Capture</h2>
      <div id="capture-target">
      <form >
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          
        />
      </div>
      <button type="submit">Submit</button>
    </form>

      </div>
      <button onClick={handleCapture} disabled={capturing}>
        {capturing ? 'Captureing..' : 'Capture'}
      </button>
      <div>
        <img src={screenshot}></img>
      </div>
    </div>
  )
}
export default App