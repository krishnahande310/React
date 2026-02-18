// function App(){
//   return <h1>Hello Guys</h1>;
// }

// export default App

import React from 'react'

// const App = () => {
//   return (
//     <div id='dad'>
//       <h1 id='child1'>Hello Ji</h1>
//       <h3 id='child2'>Kaise Ho</h3>
//     </div>

//     <div id='chacha'></div> // this is not possible as function returns only one div, so fragments comes into picture/ you can use div also, please find below code
//   )
// }

const App = () => {
  return (
//using div also possible or we can use fragments write everything in <> </>
    // <div> 
    <>
 <div id='dad'>
      <h1 id='child1'>Hello Ji</h1>
      <h3 id='child2'>Kaise Ho</h3>
    </div>

    <div id='chacha'></div> 
    
  
  </>
  // </div>
  )
}

export default App
