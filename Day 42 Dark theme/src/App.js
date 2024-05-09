import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
function App(){
 const svgRef =useRef()
  useEffect(() =>{
    const data=[20,30,30,40,50]

    const svg=d3.select(svgRef.current)
     svg.selectAll('rect')
     .data(data)
     .enter()
     .append('rect')
     .attr('x',(d,i)=> i*50)
     .attr('y',d => 100 - d)
     .attr('width',40)
     .attr('height',d => d)
     .attr('fill','blue')

  },[])


 return <svg ref={svgRef} width="300" height="100"></svg>
}
export default App