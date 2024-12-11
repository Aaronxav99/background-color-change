import React from 'react'
import { useState } from 'react';

const Change = () => {
    const [color,setColor] =useState("#008000")
  return (
    <>
     <h2 style={{textAlign:"center"}}>Background color change</h2>
     <div  style={{width:"100%",height:"100vh", backgroundColor:color,display:"flex",justifyContent:"center",alignItems:"center"}}>
        
     <button style={{width:"90px",height:"40px",marginRight:"20px"}} className='btn btn1'  onClick={()=>setColor("red")}>Red</button>
     <button style={{width:"90px",height:"40px",marginRight:"20px"}} className='btn btn2'  onClick={()=>setColor("blue")}>blue</button>
     <button style={{width:"90px",height:"40px",marginRight:"20px"}} className='btn btn3'  onClick={()=>setColor("black")}>black</button>
     <button style={{width:"90px",height:"40px",marginRight:"20px"}} className='btn btn4'  onClick={()=>setColor("yellow")}>yellow</button>
     </div>
     <button className='btn btn1'  onClick={()=>setColor("red")}>Red</button>
     <button className='btn btn2'  onClick={()=>setColor("blue")}>blue</button>
     <button className='btn btn3'  onClick={()=>setColor("black")}>black</button>
     <button className='btn btn4'  onClick={()=>setColor("yellow")}>yellow</button>

    </>
  )
}

export default Change