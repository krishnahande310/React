import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      
        <Card user='Krishna' age={18} img="https://plus.unsplash.com/premium_photo-1682756538899-56162afda294?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card user='Patil' age={25} img="https://plus.unsplash.com/premium_photo-1764691305643-81bffa53e848?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card user='Hande' age={26} img="https://plus.unsplash.com/premium_photo-1764691357104-15261f5be955?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

        {/* here we are using component Card multi times */}
      
    </div>
  )
}

export default App
