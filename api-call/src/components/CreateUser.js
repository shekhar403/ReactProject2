import React from 'react'
import { useState } from 'react';
import { apiPost } from '../services/fetch-api-services';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [color, setColor] = useState("");
    const navigate = useNavigate();
    
    return (
        <div>
            <form>
                <input type='text' placeholder='name' onChange={(e) => { setName(e.target.value) }} value={name} />
                <br></br><br></br>
                <input type='text' placeholder='age' onChange={(e) => { setAge(e.target.value) }} value={age} />
                <br></br><br></br>
                <input type='text' placeholder='color' onChange={(e) => { setColor(e.target.value) }} value={color} />
                <br></br><br></br>
                <button type='submit' onClick={(e) => {
                    e.preventDefault();
                    apiPost(name, age, color)
                        .then((result) => {
                            navigate("/users")
                        });

                }} >{"Submit"}</button>
            </form>
        </div>
    )
}

export default CreateUser