import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full flex flex-nowrap  gap-10 p-6 w-2/3 overflow-x-auto'>
     {props.users.map((e,idx)=>{
        return <RightCard key={idx} id={idx} img={e.img} tag={e.tag} color={e.color}/>
     })}
    </div>
  )
}

export default RightContent
