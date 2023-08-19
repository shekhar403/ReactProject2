import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiRead, apiDelete } from '../services/fetch-api-services';

function Users() {
    let [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {apiRead(setData)}, []);

    return (
        <div>
            <h1>Show Users / Delete User</h1>
            {data && data.map((item) => (
                <div key={item._id}>
                    <h1>{item.name}</h1>
                    <p>{item.age}</p>
                    <p>{item.colour}</p>
                    <br></br>
                    <button onClick={(e) => { navigate(`/edit-user/${item._id}`) }}>Edit</button>
                    <button style={{margin: "10px"}} onClick={(e) => apiDelete(item._id, setData)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Users