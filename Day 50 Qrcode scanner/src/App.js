import React, {  useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import jsQR from 'jsqr'

const QrCode=() =>{
   const webcamRef = useRef(null);
   const[scanned,setScanned]=useState(false)
   const[started,setStarted]=useState(false)

   const startScan=()=>{
    setStarted(true)
   }

   const capture=useCallback(() =>{
    if(webcamRef.current){
        const imageSrc=webcamRef.current.getScreenshot();
        const canvas=document.createElement('canvas');
        canvas.width=webcamRef.current.video.videoWidth;
        canvas.height=webcamRef.current.video.videoHeight;
        const ctx=canvas.getContext('2d');
        ctx.drawImage(webcamRef.current.video,0,0,canvas.width,canvas.height);
        const imageData=ctx.getImageData(0,0,canvas.width,canvas.height);
        const code=jsQR(imageData.data,imageData.width,imageData.height)
          
        if(code){
            setScanned(true)
            alert('OQ Code:' + code.data)
        }
          
    }
   },[])



  return(
    <div>
    {!started && <button onClick={startScan}>Start Scan</button>}
    {started &&(
    <>
    <Webcam
      audio={false}
      ref={webcamRef}
      screenshotFormat='image/jpeg'
      style={{width:'100%',maxWidth:'300px'}}
    />
   <button onClick={capture}>Capture</button>
   </>
   )}
   {scanned && <p>ORCode scanned</p>}
   </div>
  )

}
export default QrCode;