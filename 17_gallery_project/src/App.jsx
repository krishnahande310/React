import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData,setUserData] = useState([]);

  const [index,setIndex] = useState(1);

  
  useEffect(()=>{
    getData();
  },[index]);


  const getData = async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    
    setUserData(response.data);
    console.log(userData);
  }



  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if(userData.length>0){
    printUserData = userData.map(function(e,idx){
      return  <div key={idx}> <a href={e.url} target='_blank'>
        <div  className='h-50 w-70 bg-white rounded-xl overflow-hidden'><img className='h-full w-full object-cover' src={e.download_url} alt="" /></div>
        <h2 className='font-bold text-lg'>{e.author}</h2>
        </a>
      </div>
    })
  }


  const changePrev = ()=>{
    if(index>1){
      setIndex(index-1);
      setUserData([]);
    }
  }

  const changeNext=()=>{
    setUserData([]);
    setIndex(index+1);
  }

  return (
       <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <div className='flex h-[82%] flex-wrap gap-4 p-2'>

    {printUserData}
    </div>  

<div className='flex justify-center gap-6 items-center p-4 '>
    <button style={{ opacity: index == 1 ? 0.6 : 1 }} className='bg-amber-400 text-sm cursor-pointer  text-black rounded px-4 py-2 font-semibold' onClick={changePrev}>Prev</button>
    <h4 className='justify-center '>Page {index}</h4>
    <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold' onClick={changeNext}>Next</button>
    </div>
    </div>
  )
}

export default App
