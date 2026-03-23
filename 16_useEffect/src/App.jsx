import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
 
  const [num,setnum]=useState(0);
  const [num2,setnum2]=useState(100);

  const [A, setA]=useState('A');
  const [B,setB]=useState('B'); 

  // useEffect(()=>{
  //   console.log("Use Effect running");
  // },[])  //without dependency, so it will run every time if any change in react renderiing, like changing value of num

  // useEffect(()=>{
  //     console.log("UseEffect is running");
  // },[num]) //here dependency is num , so on every change of num it will run, if num2 changes, it will not run
 

  useEffect(()=>{
    console.log("UseEffect is running");
  },[A])


  const aChanging=()=>{
    setA(A+1);
    console.log("A is changing");
  };

  const bChanging = ()=>{
    setB(B+1);
    console.log("B is changing");
  };


  const changeNum=()=>{
    setnum(num+1);
    
  }

  const changenum2=()=>{
    setnum2(num2+10);
  }

  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      {/* <button onClick={changeNum}>Click</button> */}
      <button onMouseEnter={changeNum} onMouseLeave={changenum2}>Click</button>

      <br /><br /><br />
      <h1>---------------- Example-----------------</h1>
      <br /><br />
      <h1>A</h1>
      <h1>B</h1>
      <button onClick={aChanging}>ChangeA</button>
      <button onClick={bChanging}>ChangeB</button>
    </div>
  )
}

export default App
