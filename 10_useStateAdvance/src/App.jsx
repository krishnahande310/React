import React, { useState } from 'react'

const App = () => {
  
  const [num,setnum]=useState([10,20,30]);
  const [obj,setObj]=useState({user:'Krishna',age:24})

  const changeNum=()=>{
    const newNum=[...num] //destructuring
    newNum.push(40);
    setnum(newNum);




  }


  const batchUpdate=()=>{
    setnum(num+1);
    setnum(num+1);
    setnum(num+1);
    //if we use like this, it will change by 1 only , to resolve this we have batch update

    setnum(prev=>(prev+1));
    setnum(prev=>(prev+1));
    setnum(prev=>(prev+1));

    //by this it will increase by 3


  }


  const changeObj=()=>{
    
    setObj(prev=>({...prev,age:50}))
  }

  return (
    <div>
      <h1>{num}</h1>
      <br /><br />
      <h1>{obj.user},{obj.age}</h1>
      <br /><br />
      <button onClick={changeNum}>Click</button>
      <button onClick={changeObj}>ClickObj</button>
    </div>
  )
}

export default App
