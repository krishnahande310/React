import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  
  // const getData =  async ()=>{
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      
  //     const data1 = await response.json(); 
  //     // console.log(response)
  //     console.log(data1);
  // }

  const [data,setData] = useState([]);

  const getData = async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    // console.log(response.data);
    setData(response.data);
  }
  
  return (
    <div>
    <button onClick={getData}>Data</button>  
    <div>
      {data.map((e,idx)=>{
        return <h3>Hello ,{e.title},{idx}</h3>
      })}
    </div>
    </div>
  )
}

export default App
