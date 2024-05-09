import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

function App(){
   const svgRef = useRef();
   const margin={top:20,right:20,bottom:30,left:50}
   const width = 800 - margin.left - margin.right;
   const height= 400 - margin.top - margin.bottom;

   useEffect(()=>{
    const data=[10,20,30,40,50];

    const svg=d3.select(svgRef.current)
         .attr('width',width + margin.left + margin.right)
         .attr('height',height + margin.top + margin.bottom)
         .append('g')
         .attr('transform',`translate(${margin.left},${margin.top})`)

   const xScale=d3.scaleLinear()
   .domain([0, data.length - 1])    
     .range(([0,width]))

     const yScale=d3.scaleLinear()
     .domain([0, d3.max(data)])    
       .range(([height,0]))  

       const line = d3.line()
       .x((d,i) => xScale(i))
       .y(d => yScale(d))

   svg.append('path')
   .datum(data)  
   .attr('fill','none')
   .attr('stroke','blue')
   .attr('stroke-width',2)
   .attr('d',line)

   
   svg.append('g')
   .attr('transform',`translate(0,${height})`)
   .call(d3.axisBottom(xScale))

   svg.append('g')
   .call(d3.axisLeft(yScale))
   })





  return(
    <svg ref={svgRef}></svg>
  )
}
export default App