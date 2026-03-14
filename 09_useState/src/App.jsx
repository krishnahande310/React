import React, { useState } from 'react'

const App = () => {
  
 const[a,seta]=useState(20);
 const[userName,setUser]=useState('Krishna');

 const changeA=()=>{
  seta(a+10)
 }

 const changeUser=()=>{
  setUser('Patil');
 }

 const changeBtn=()=>{
  changeA();
  changeUser();
 }


 const [num,setNum]=useState(0);
 

 const increaseNum =()=>{
  setNum(num+1);
 }

 const decreaseNum =()=>{
  setNum(num-1);
 }

 const jump5=()=>{
  setNum(num+5);
 }

  return (
    <div>
      <h1>Value of user is {userName}</h1>
      <h1>Value of a is {a}</h1>
      <button onClick={changeBtn}>Click</button>
      <br /><br />

      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      ,<button onClick={jump5}>Jump by 5</button>
    </div>
  )
}

export default App
