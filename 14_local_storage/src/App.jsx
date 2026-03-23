import React from 'react'

const App = () => {
  
  // localStorage.clear();
  // sessionStorage.clear();

  // localStorage.setItem('User','Krishna');
  // localStorage.setItem('Age',24);
localStorage.removeItem('User');

  const item = localStorage.getItem('Age');
  console.log(item);    
  
  const user = {
    name:'Krishna',
    age:24,
    city:'Akola'
  };

  localStorage.setItem('user',JSON.stringify(user));
  // const user1 = localStorage.getItem('user');
  const user1 = JSON.parse(localStorage.getItem('user'));
  console.log(user1);
  console.log(typeof(user1));
  
  return (
    <div>
      App
    </div>
  )
}

export default App
