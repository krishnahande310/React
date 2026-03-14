import React from 'react'

const App = () => {

  const btnClicked=()=>{
    console.log("Button is clicked");
  }

  const mouseEnter=()=>{
    console.log("Mouse is enter");
  }

  const inputChange=(e)=>{
    console.log(e.target.value);
  }

  const onMove=(e)=>{
    console.log(e.clientX,e.clientY);
  }

  const onScroll=(e)=>{
    console.log('Page is scrolling at speed',e.deltaY);
  }

  return (
    <div>
      <h2>Hello</h2>
      <button onMouseEnter={mouseEnter} onClick={btnClicked}>Submit</button>
      <br /><br />
      {/* or you can also write function in tag also  */}

      <button onClick={()=>{console.log("Button is clicked")}}>ClickHere</button>
      <br /><br />

      <input onChange={inputChange} type="text" placeholder='Enter Name' />
      <br /><br />

      <div style={{height:'300px' ,width:'300px' ,backgroundColor:'red'}} className='box' onMouseMove={onMove}></div>
      <br /><br />

      <div onWheel={onScroll} style={{height:'1000px' ,width:'1000px' ,backgroundColor:'blue'}} className='page1'></div>
      <div onWheel={onScroll} style={{height:'1000px' ,width:'1000px' ,backgroundColor:'green'}} className='page2'></div>
      <div onWheel={onScroll} style={{height:'1000px' ,width:'1000px' ,backgroundColor:'pink'}} className='page3'></div>
    </div>
  )
}

export default App
