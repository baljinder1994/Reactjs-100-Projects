import React, { useEffect } from 'react'
import './App.css'
const Trading =() =>{
 useEffect(() =>{
  const script = document.createElement("script");
  script.src='https://s3.tradingview.com/tv.js'
  script.async=true;
  script.onload=()=>{
    new window.TradingView.widget({
      "autosize":true,
      "symbol":"FX:EURUSD",
      "interval":"D",
      "timezone":"Etc/UTC",
      "theme":"light",
      "style":"1",
      "locale":"en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing":false,
      "withdateranges":true,
      "hide_side_toolbar":false,
      "allow_symbol_change":true,
      "details":true,
      "container_id":"graph"
    })

  }
  document.body.appendChild(script)
  return() =>{
    document.body.removeChild(script)
  }
 },[])
 return <div id="graph"></div>
}

export default Trading;