import React, { useState } from 'react'
import {isMobile,isDesktop,isTablet} from 'react-device-detect'
function App(){
  const[device,setDevice]=useState(getDevice())

  function getDevice(){
     if(isMobile) return 'Mobile';
     if(isDesktop) return 'Desktop'
     if(isTablet) return 'Tablet';
     return 'Unknown'
  }
  return(
    <h1>You are using :{device}</h1>
  )
}
export default App