import React from 'react'

const formHandler=(e)=>{
  e.preventDefault();
  console.log("Form Submitted");
}


const App = () => {
  return (
    <div>
      <form action="" onSubmit={formHandler}>
        <input type="text" placeholder='Enter your Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
