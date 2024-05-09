import React, { useEffect, useRef, useState } from 'react'
import JsBarcode from 'jsbarcode'
const Barcode=()=>{
   const[barcodeData,setBarcodeData] =useState('')
   const[barcodeType,setBarcodeType]=useState('code128')
   const barcodeRef=useRef(null);

   useEffect(() =>{
    if(barcodeData){
      generateCode();
    }
   },[barcodeData,barcodeType])

   const generateCode=()=>{
     try{
      JsBarcode(barcodeRef.current,barcodeData,{
          format:barcodeType,
          displayValue:true
      })
     }catch(error){
console.error('Error',error)
     }
   }


return(
  <div>
    <div>
      <label>Barcode Data:</label>
      <input value={barcodeData} onChange={(e)=>setBarcodeData(e.target.value)}></input>
      <label>Type:</label>
      <select 
        id="barcodeType"
        value={barcodeType}
        onChange={e => setBarcodeType(e.target.value)}
      >
        <option value="code128">Code128</option>
        <option value="EAN13">EAN13</option>
        <option value="CODE39">CODE39</option>
      </select>
    </div>
    <svg ref={barcodeRef}></svg>
  </div>
)
}
export default Barcode