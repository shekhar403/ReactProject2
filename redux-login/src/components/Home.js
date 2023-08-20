import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
    const email = useSelector((state)=>state.email);
    const userName = useSelector((state)=>state.userName);

  return (
    <div style={{color: 'darkorchid'}}>
        <h1>{`Welcome`}</h1> 
        <h1>{userName}</h1>
         <h3>{email}</h3>
    </div>
  )
}

export default Home