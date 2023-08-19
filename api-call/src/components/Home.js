import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>React / Fetch CRUD operations demo website</h1>
            <button type='button' onClick={(e)=>navigate(`/users`)}>Show Users</button>
            <br></br>
            <br></br>
            <button type='button' onClick={(e)=>navigate("/create-user")}>Add User</button>
        </div>
    )
}

export default Home