import React, { useState } from 'react'

const App = () => {

  const [title,setTitle]=useState('');

  const formhandler =(e)=>{
    e.preventDefault();
    console.log("Form Submitted by ",title);

    //to make input tag again blank use
    setTitle('');
  }

  const inputChange=(e)=>{
    // console.log(e.target.value);

    setTitle(e.target.value);

  }

  return (
    <div>
      <form action="" onSubmit={formhandler}>
        <input type="text" onChange={inputChange} placeholder='Enter your name' value={title}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App



// in two way binding we tell react to do things like whatever i have input the values , set them like using usestate