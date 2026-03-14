import React from 'react'
import Card from './components/cards.jsx'
import Navbar from './components/navbar.jsx'

const App = () => {
  return (
    <div>
 <Navbar/>
  {/* <Navbar/>  now here you can use this multiple times like this */}
 <Card/>
    </div>
  )
}

export default App
