import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { decrement, decrementBy, increment, incrementBy } from '../Store/counterSlice';
import Form from 'react-bootstrap/Form';

function Home() {
    const email = useSelector((state)=>state.auth.email);
    const userName = useSelector((state)=>state.auth.userName);
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
    const [val, setVal] = useState(0);
    
    const inc = (e) => {
        if (isNaN(val) || val === 0) {
            dispatch(increment())
        }
        else {
            dispatch(incrementBy(val))
        }
        
    }

    const dec = (e) => {
        if (isNaN(val) || val === 0) {
            dispatch(decrement())
        }
        else {
            dispatch(decrementBy(val))
        }
    }

  return (
    <div style={{color: 'darkorchid'}}>
        <h1>{`Welcome`}</h1> 
        <h1>{userName}</h1>
         <h3>{email}</h3>
         <h1>Count : {count}</h1>
         <br></br>
         <Form.Control type="number" placeholder="Enter value to add / subtract" className='shadow-lg w-50 mx-5 d-inline' onChange={(e) => {setVal(parseInt(e.target.value))}} />
         <br></br>
         <br></br>
         <button type='submit' className='btn btn-primary d-inline w-25 shadow-lg mx-5' onClick={inc}>Increment</button>
         <button type='submit' className='btn btn-primary d-inline w-25 shadow-lg mx-5' onClick={dec}>Decrement</button>
        

    </div>
  )
}

export default Home